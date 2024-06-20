from django import forms


class InputForm(forms.Form):
    text_input = forms.CharField(max_length=1000)
    file = forms.ImageField(required=False)
