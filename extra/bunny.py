import torch
import transformers
from modelscope import AutoTokenizer, AutoModelForCausalLM
from modelscope.hub.snapshot_download import snapshot_download
from PIL import Image
import warnings



def conduct_inference(text,image):
    # disable some warnings
    transformers.logging.set_verbosity_error()
    transformers.logging.disable_progress_bar()
    warnings.filterwarnings('ignore')

    # set device
    device = 'cpu'  # or cpu
    torch.set_default_device(device)

    model_name = 'BAAI/Bunny-v1.0-2B-zh'  # or 'BAAI/Bunny-v1.0-3B' or 'BAAI/Bunny-v1.0-3B-zh' or 'BAAI/Bunny-v1.0-2B-zh'
    # offset_bos = 1 # for Bunny-Llama-3-8B-V and Bunny-v1.0-3B-zh
    offset_bos = 0  # for Bunny-v1.0-3B and Bunny-v1.0-2B-zh

    # create model
    snapshot_download(model_id='thomas/siglip-so400m-patch14-384')
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.float32,  # float32 for cpu
        device_map={'': 'cpu'},
        trust_remote_code=True)
    tokenizer = AutoTokenizer.from_pretrained(
        model_name,
        trust_remote_code=True)

    # text prompt
    if image:
        hint = f"A chat between a curious user and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the user's questions. USER: <image>\n{text} ASSISTANT:"
        text_chunks = [tokenizer(chunk).input_ids for chunk in hint.split('<image>')]
        input_ids = torch.tensor(text_chunks[0] + [-200] + text_chunks[1][offset_bos:], dtype=torch.long).unsqueeze(
            0).to(device)
        image_tensor = model.process_images([image], model.config).to(dtype=model.dtype, device=device)

        # generate
        output_ids = model.generate(
            input_ids,
            images=image_tensor,
            max_new_tokens=100,
            use_cache=True)[0]
    else:
        hint = f"A chat between a curious user and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the user's questions. USER: {text} ASSISTANT:"
        input_ids = tokenizer(hint, return_tensors="pt").input_ids.to(device)

        # generate
        output_ids = model.generate(
            input_ids,
            max_new_tokens=100,
            use_cache=True)[0]

    return tokenizer.decode(output_ids[input_ids.shape[1]:], skip_special_tokens=True).strip()


