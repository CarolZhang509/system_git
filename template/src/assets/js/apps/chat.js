$('.search > input').on('keyup', function() {
  var rex = new RegExp($(this).val(), 'i');
    $('.people .person').hide();
    $('.people .person').filter(function() {
        return rex.test($(this).text());
    }).show();
});

$('.user-list-box').on('click','.person', function(event) {
    if ($(this).hasClass('.active')) {
        return false;
    } else {
        var findChat = $(this).attr('data-chat');
        var personName = $(this).find('.user-name').text();
        var personImage = $(this).find('img').attr('src');
        var hideTheNonSelectedContent = $(this).parents('.chat-system').find('.chat-box .chat-not-selected').hide();
        var showChatInnerContent = $(this).parents('.chat-system').find('.chat-box .chat-box-inner').show();

        if (window.innerWidth <= 767) {
          $('.chat-box .current-chat-user-name .name').html(personName.split(' ')[0]);
        } else if (window.innerWidth > 767) {
          $('.chat-box .current-chat-user-name .name').html(personName);
        }
        $('.chat-box .current-chat-user-name img').attr('src', personImage);
        $('.chat').removeClass('active-chat');
        $('.user-list-box .person').removeClass('active');
        $('.chat-box .chat-box-inner').css('height', '100%');
        $('.chat-box .overlay-phone-call').css('display', 'block');
        $('.chat-box .overlay-video-call').css('display', 'block');
        $(this).addClass('active');
        $('.chat[data-chat = '+findChat+']').addClass('active-chat');
    }
    if ($(this).parents('.user-list-box').hasClass('user-list-box-show')) {
      $(this).parents('.user-list-box').removeClass('user-list-box-show');
    }
    $('.chat-meta-user').addClass('chat-active');
    $('.chat-box').css('height', 'calc(100vh - 158px)');
    $('.chat-footer').addClass('chat-active');

  const ps = new PerfectScrollbar('.chat-conversation-box', {
    suppressScrollX : true
  });

  const getScrollContainer = document.querySelector('.chat-conversation-box');
  getScrollContainer.scrollTop = 0;
});

const ps = new PerfectScrollbar('.people', {
  suppressScrollX : true
});

// 绑定点击事件到删除按钮
$('.chat-conversation-box').on('click', '.delete-chat', function() {
    var $chat = $(this).closest('.chat');
    var chatId = $chat.data('chat');
    var $nextChat = $chat.next('.chat').length ? $chat.next('.chat') : $chat.prev('.chat');
    var nextChatId = $nextChat.length ? $nextChat.data('chat') : '';

    // 删除聊天内容和对应的用户列表项
    $chat.remove();
    $('.person[data-chat="' + chatId + '"]').remove();


    // 显示一个默认的未选择聊天的界面
    $('.chat-box-inner').hide();
    $('.chat-not-selected').show();
});

$('.mail-write-box').on('keydown', function(event) {
    if(event.key === 'Enter') {
        var chatInput = $(this);
        var chatMessageValue = chatInput.val();
        if (chatMessageValue === '') { return; }
        $messageHtml = '<div class="bubble me">' + chatMessageValue + '</div>';
        var appendMessage = $(this).parents('.chat-system').find('.active-chat').append($messageHtml);
        const getScrollContainer = document.querySelector('.chat-conversation-box');
        getScrollContainer.scrollTop = getScrollContainer.scrollHeight;
        var clearChatInput = chatInput.val('');
    }
})

document.getElementById('addNewConversation').addEventListener('click', function() {
    var userListBox = document.querySelector('.user-list-box .people');
    var newConversationNumber = userListBox.children.length + 1;
    var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 创建新对话人物
    var newPersonHTML = `
        <div class="person" data-chat="conversation${newConversationNumber}">
            <div class="user-info">
                <div class="f-body">
                    <div class="meta-info">
                        <span class="user-name" data-name="请求帮助">请求帮助</span>
                        <span class="user-meta-time">今天 ${currentTime}</span>
                    </div>
                </div>
            </div>
        </div>`;

    // 创建新对话框内容
    var newChatHTML = `
            <div class="chat" data-chat="conversation${newConversationNumber}">
                <div class="conversation-start">
                <p class="delete-chat" style="cursor: pointer; color: red;">Delete</p>
                    <span>今天, ${currentTime}</span>
                </div>
                <div class="bubble you">
                    Hello, what can I help you?
                </div>
            </div>`;

    // 添加新创建的元素到DOM
    userListBox.insertAdjacentHTML('beforeend', newPersonHTML);
    document.querySelector('.chat-conversation-box-scroll').insertAdjacentHTML('beforeend', newChatHTML);
});

$('#addNewChat').on('click', function() {
    // 获取当前时间作为对话的时间戳
    var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 新对话人数编号
    var userListBox = $('.user-list-box .people');
    var newConversationNumber = userListBox.children().length + 1;

    // 创建新对话人物和对话内容
    var newPersonHTML = `
            <div class="person" data-chat="conversation${newConversationNumber}">
                <div class="user-info">
                    <div class="f-body">
                        <div class="meta-info">
                            <span class="user-name" data-name="请求帮助">请求帮助</span>
                            <span class="user-meta-time">今天 ${currentTime}</span>
                        </div>
                    </div>
                </div>
            </div>`;
    var newChatHTML = `
            <div class="chat" data-chat="conversation${newConversationNumber}">
                <div class="conversation-start">
                    <p class="delete-chat" style="cursor: pointer; color: red;">Delete</p>
                    <span>今天, ${currentTime}</span>
                </div>
                <div class="bubble you">
                    Hello, what can I help you?
                </div>
            </div>`;

    // 添加新创建的元素到DOM中
    userListBox.append(newPersonHTML);
    $('.chat-conversation-box-scroll').append(newChatHTML);

    // 触发点击以激活新对话
    userListBox.find('.person').last().trigger('click');
});

// 添加到用户列表中
userListBox.insertAdjacentHTML('beforeend', newPersonHTML);
// 消息发送功能
$('.mail-write-box').on('keydown', function(event) {
    if(event.key === 'Enter') {
        var chatInput = $(this);
        var chatMessageValue = chatInput.val();
        if (chatMessageValue === '') { return; }
        var messageHtml = '<div class="bubble me">' + chatMessageValue + '</div>';
        var activeChat = $('.active-chat');
        activeChat.append(messageHtml);
        var getScrollContainer = document.querySelector('.chat-conversation-box');
        getScrollContainer.scrollTop = getScrollContainer.scrollHeight;
        chatInput.val('');
    }
});


$('.hamburger, .chat-system .chat-box .chat-not-selected p').on('click', function(event) {
  $(this).parents('.chat-system').find('.user-list-box').toggleClass('user-list-box-show')
})






