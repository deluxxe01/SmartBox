

const req = [{
    payload:{
        orderId: "",
        id_client:"",
        caixa:{
            codigoProduto:"",//numeros de andares
            bloco1:{
                 cor: '',
                lamina1: '',
                lamina2: '',
                lamina3: '',
                padrao1: '',
                padrao2: '',
                padrao3: ''
            },
            bloco2:{
                 cor: '',
                lamina1: '',
                lamina2: '',
                lamina3: '',
                padrao1: '',
                padrao2: '',
                padrao3: ''
            },
            bloco3:{
                 cor: '',
                lamina1: '',
                lamina2: '',
                lamina3: '',
                padrao1: '',
                padrao2: '',
                padrao3: ''
            }
        },
        sku: 'caixa' //Refere-se ao nome da caixa

    },
    callbackUrl: "http://localhost:3333/callback"
}
]