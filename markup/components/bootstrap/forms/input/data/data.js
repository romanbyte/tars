const data = {
    dummyFix :{
        '1':{}
    },
    demoFormSample: {
        '1': {
            'type' :'text',
            'id': 'input1',
            'placeholder':'placeholder',
            'label': 'Name',
            'addtext' : {
                '1': {
                    'class': 'form-text text-muted',
                    'text': 'Enter you Name here'
                }
            }
        },
        '2': {
            'type' :'email',
            'id': 'input2',
            'placeholder':'placeholder',
            'label': 'Email address'

        },
        '3': {
            'type' :'password',
            'id': 'input3',
            'placeholder':'placeholder',
            'label': 'Enter password'

        },
        '4': {
            'type' :'text',
            'id': 'input3',
            'placeholder':'disabled input',
            'label': 'Enter text',
            'inputattrs': {
                'disabled':'disabled'
            },
            'groupattrs':{
                'disabled': 'disabled'
            }

        }
    },
    demoInputsInline : {
        '1': {
            'type' :'email',
            'id': 'inputInline1',
            'placeholder':'placeholder',
            'label': 'Email address'
        },
        '2': {
            'type' :'password',
            'id': 'inputInline2',
            'placeholder':'placeholder',
            'label': 'Password'
        }
    },
    demoInputsGroup : {
        '1': {
            'type' :'text',
            'id': 'demoInputsGroup1',
            'placeholder':'placeholder',
            'label': 'Email address',
            'prepend': '$',
            'append': '.00'
        },
        '2': {
            'type' :'password',
            'id': 'demoInputsGroup2',
            'placeholder':'placeholder',
            'label': 'Password',
            'prepend': '$',
            'append': '.00'
        }
    },
    demoFormValidations : {
        '1': {
            'type' :'text',
            'id': 'inputSuccess1',
            'placeholder':'placeholder',
            'label': 'Input with success',
            'inputattrs': {
                'class':'form-control-success'
            },
            'groupattrs':{
                'class': 'has-success'
            },
            'addtext' : {
                '1' : {
                    'class': 'form-control-feedback',
                    'text': 'Success! You\'ve done it.'
                },
                '2' : {
                    'class': 'form-text text-muted',
                    'text': 'Example help text that remains unchanged.'
                }

            }
        },
        '2': {
            'type' :'text',
            'id': 'inputWarning1',
            'placeholder':'placeholder',
            'label': 'Input with warning',
            'inputattrs': {
                'class':'form-control-warning'
            },
            'groupattrs':{
                'class': 'has-warning'
            },
            'addtext' : {
                '1' : {
                    'class': 'form-control-feedback',
                    'text': 'Shucks, check the formatting of that and try again.'
                },
                '2' : {
                    'class': 'form-text text-muted',
                    'text': 'Example help text that remains unchanged.'
                }

            }
        },
        '3': {
            'type' :'text',
            'id': 'inputDanger1',
            'placeholder':'placeholder',
            'label': 'Input with danger',
            'inputattrs': {
                'class':'form-control-danger'
            },
            'groupattrs':{
                'class': 'has-danger'
            },
            'addtext' : {
                '1' : {
                    'class': 'form-control-feedback',
                    'text': 'Sorry, that username\'s taken. Try another?'
                },
                '2' : {
                    'class': 'form-text text-muted',
                    'text': 'Example help text that remains unchanged.'
                }

            }
        }
    },
    demoFormToCols: {
        '1': {
            'type' :'email',
            'id': 'input10',
            'placeholder':'placeholder',
            'label': 'Email address',
            'inputattrs': false,
            'labelattrs': {
                'class':'col-sm-2'
            },
            'colattrs': {
                'class': 'col-sm-10'
            }
        },
        '2': {
            'type' :'password',
            'id': 'inputPassword5',
            'placeholder':'Password',
            'label': 'Password',
            'inputattrs': false,
            'labelattrs': {
                'class':'col-sm-2'
            },
            'colattrs': {
                'class': 'col-sm-10'
            }
        }
    }
};