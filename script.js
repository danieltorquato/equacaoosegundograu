calcularResultado = () => {
    //Puxa todas as divs do HTML    
    let resultdelta = window.document.getElementById('resultdelta')
    let resultbhaskarax1 = window.document.getElementById('resultbhaskarax1')
    let resultbhaskarax2 = window.document.getElementById('resultbhaskarax2')
    let geralres = window.document.getElementById('resultados')
    let geralres1 = window.document.getElementById('resultados1')
    let geralres2 = window.document.getElementById('resultados2')
    let chegaraoresult = window.document.getElementById('chegaraoresult')
    let expressaomontada = window.document.getElementById('expressaomontada')
    let expressaomontada1 = window.document.getElementById('expressaomontada1')
    let expressaomontada2 = window.document.getElementById('expressaomontada2')
    let chegaraoresult1 = window.document.getElementById('chegaraoresult1')
    let chegaraoresult2 = window.document.getElementById('chegaraoresult2')
    let chegaraoresult3 = window.document.getElementById('chegaraoresult3')
    let chegaraoresult4 = window.document.getElementById('chegaraoresult4')
    let chegaraoresult5 = window.document.getElementById('chegaraoresult5')
    let chegaraoresult6 = window.document.getElementById('chegaraoresult6')
    let chegaraoresult7 = window.document.getElementById('chegaraoresult7')
    let chegaraoresult8 = window.document.getElementById('chegaraoresult8')
    let chegaraoresult9 = window.document.getElementById('chegaraoresult9')
    let chegaraoresult10 = window.document.getElementById('chegaraoresult10')
    let chegaraoresult11 = window.document.getElementById('chegaraoresult11')
    let chegaraoresult12 = window.document.getElementById('chegaraoresult12')
    let chegaraoresult13 = window.document.getElementById('chegaraoresult13')
    let chegaraoresult14 = window.document.getElementById('chegaraoresult14')
    let chegaraoresult15 = window.document.getElementById('chegaraoresult15')
    let chegaraoresult16 = window.document.getElementById('chegaraoresult16')
    let chegaraoresult17 = window.document.getElementById('chegaraoresult17')
    let chegaraoresult18 = window.document.getElementById('chegaraoresult18')
    let chegaraoresult19 = window.document.getElementById('chegaraoresult19')
    let chegaraoresult20 = window.document.getElementById('chegaraoresult20')
    let chegaraoresult21 = window.document.getElementById('chegaraoresult21')
    let chegaraoresult22 = window.document.getElementById('chegaraoresult22')
    let chegaraoresult23 = window.document.getElementById('chegaraoresult23')
    let valordiga = window.document.getElementById('valordiga')
    let valorigb = window.document.getElementById('valordigb')
    let valordigc = window.document.getElementById('valordigc')
    //Identificando o que foi digitado nos inputs(campos digitáveis)
    let valora = valordiga.value
    let valorb = valordigb.value
    let valorc = valordigc.value
    let hide = ' '
    //Cria os calculos conforme as fórmulas de delta e bhaskara
    let delta = valorb ** 2 - 4 * valora * valorc //Fórmula de delta: b²-4.a.c
    if (delta < 0) {
        window.alert('O delta é negativo')
        return hide
    }
    let bhaskarax1 = -valorb + Math.sqrt(delta)// Formula de Bhaskara x1(-b+√▲/2.a) parte de cima separada pois a divisão seria feita primeiro e o resultado seria outro. Math.sqrt(delta) Retorna raiz quadrada de delta
    let bhaskaraxx1 = 2 * valora // Fórmula de Bhaskara x1(-b+√▲/2.a) parte de baixo
    let bhaskarax1result = bhaskarax1 / bhaskaraxx1 //Fórmula de Bhaskara x1(-b+√▲/2.a) resultado
    let bhaskarax2 = -valorb - Math.sqrt(delta) //Formula de Bhaskara x2(-b-√▲/2.a) parte de cima
    let bhaskaraxx2 = 2 * valora //Fórmula de Bhaskara x2(-b-√▲/2.a) parte de baixo
    let bhaskarax2result = bhaskarax2 / bhaskaraxx2 //Fórmula de Bhaskara x2(-b-√▲/2.a) parte de baixo
    //Se todos forem positivos
   if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valora >= 0 && valorb >= 0 && valorc >= 0) {
        expressaomontada.innerHTML = `f= ${valora}x² + ${valorb}x + ${valorc}`
        chegaraoresult1.innerHTML = `Seu Delta é: ${valorb.replace('+', ' ')}² - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`
        chegaraoresult.innerHTML = `${bhaskarax1}
         ${bhaskaraxx1}`

        chegaraoresult.innerHTML = `▲=${valorb.replace('-', ' ')}² - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . (${valorc.replace('+', ' ')})`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= ${valora}x² + ${valorb}x + ${valorc}`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -${valorb.replace('+', ' ')} + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= -${valorb.replace('+', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= ${valora}x² + ${valorb}x + ${valorc}`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x1= -${valorb.replace('+', ' ')} - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x1= -${valorb.replace('+', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x1= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x1= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x1= ${bhaskarax2result}`

    }//Se todos forem negativos
    else if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valora < 0 && valorb < 0 && valorc < 0) {
        expressaomontada.innerHTML = `f= -(${valora}x²) + (${valorb}x) + (${valorc})`
        chegaraoresult1.innerHTML = `Seu Delta é: (${valorb.replace('+', ' ')}²) - 4 . (${valora}) . (${valorc.replace('+', ' ')})`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`

        chegaraoresult.innerHTML = `▲=-${valorb.replace('+', ' ')}² - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . (${valorc.replace('+', ' ')})`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= -(${valora}x²) + (${valorb}x) + (${valorc})`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= -(${valora}x²) + (${valorb}x) + (${valorc})`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x2= -(${valorb.replace('+', ' ')}) - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x2= -(${valorb.replace('+', ' ')}) - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x2= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x2= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x2= ${bhaskarax2result}`
    }//Se somente a for negativo
    else if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valora < 0 && valorb >= 0 && valorc >= 0) {
        expressaomontada.innerHTML = `f= -(${valora}x²) + ${valorb}x + ${valorc}`
        chegaraoresult1.innerHTML = `Seu Delta é: ${valorb.replace('+', ' ')}² - 4 . (${valora}) . ${valorc.replace('+', ' ')}`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`

        chegaraoresult.innerHTML = `▲=-${valorb.replace('+', ' ')}² - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . ${valorc.replace('+', ' ')}`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= -(${valora}x²) + ${valorb}x + ${valorc}`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -${valorb.replace('+', ' ')} + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= ${valorb.replace('+', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= -(${valora}x²) + ${valorb}x + ${valorc}`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x1= ${valorb.replace('+', ' ')} - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x1= ${valorb.replace('+', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x1= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x1= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x1= ${bhaskarax2result}`
    }
    //Se somente b for negativo
    else if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valorb < 0 && valora >= 0 && valorc >= 0) {
        expressaomontada.innerHTML = `f= ${valora}x² + (${valorb}x) + ${valorc}`
        chegaraoresult1.innerHTML = `Seu Delta é: (${valorb.replace('+', ' ')}²) - 4 . ${valora} . ${valorc.replace('+', ' ')}`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`

        chegaraoresult.innerHTML = `▲=-(${valorb.replace('+', ' ')}²) - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . (${valorc.replace('+', ' ')})`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x1= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x1= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x1= ${bhaskarax2result}`
    }//Se somente c for negativo
    else if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valorc < 0 && valorb >= 0 && valora >= 0) {
        expressaomontada.innerHTML = `f= ${valora}x² + ${valorb}x + (${valorc})`
        chegaraoresult1.innerHTML = `Seu Delta é: ${valorb.replace('+', ' ')}² - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`

        chegaraoresult.innerHTML = `▲=-(${valorb.replace('+', ' ')}²) - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . (${valorc.replace('+', ' ')})`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x1= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x1= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x1= ${bhaskarax2result}`
    }//Se somente o a, b forem negativos
    else if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valora < 0 && valorb < 0 && valorc >= 0) {
        expressaomontada.innerHTML = `f= (${valora}x²) + (${valorb}x) + ${valorc}`
        chegaraoresult1.innerHTML = `Seu Delta é: (${valorb.replace('+', ' ')})² - 4 . (${valora}) . ${valorc.replace('+', ' ')}`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`

        chegaraoresult.innerHTML = `▲=-(${valorb.replace('+', ' ')}²) - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . (${valorc.replace('+', ' ')})`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x1= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x1= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x1= ${bhaskarax2result}`
    }//Se somente o a, c forem negativos
    else if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valora < 0 && valorc < 0 && valorb >= 0) {
        expressaomontada.innerHTML = `f= (${valora}x²) + ${valorb}x + (${valorc})`
        chegaraoresult1.innerHTML = `Seu Delta é: ${valorb.replace('+', ' ')}² - 4 . (${valora}) . (${valorc.replace('+', ' ')})`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`

        chegaraoresult.innerHTML = `▲=-(${valorb.replace('+', ' ')}²) - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . (${valorc.replace('+', ' ')})`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x1= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x1= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x1= ${bhaskarax2result}`
    }//Se somente b,c forem negativos
    else if (valora.length >= 1 && valorb.length >= 1 && valorc.length >= 1 && valorc < 0 && valorb < 0 && valora >= 0) {
        expressaomontada.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        resultdelta.innerHTML = `O valor de Delta é: ${delta}`
        resultbhaskarax1.innerHTML = `O valor de x1 é: ${bhaskarax1result}`
        resultbhaskarax2.innerHTML = `O valor de x2 é: ${bhaskarax2result}`

        chegaraoresult.innerHTML = `▲=-(${valorb.replace('+', ' ')}²) - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult1.innerHTML = `▲= ${valorb.replace('-', ' ')}² - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult2.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} - 4 . ${valora} . (${valorc.replace('+', ' ')})`
        chegaraoresult3.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} ${valora * -4} . (${valorc.replace('+', ' ')})`
        chegaraoresult4.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2} . ${valora * -4 * valorc.replace('+', ' ')}`
        chegaraoresult5.innerHTML = `▲= ${valorb.replace('-', ' ') ** 2 + valora * -4 * valorc.replace('+', ' ')}`
        expressaomontada1.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult6.innerHTML = `2 . ${valora}`
        chegaraoresult7.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + √${delta}`
        chegaraoresult7.style = "text-decoration: underline";
        chegaraoresult8.innerHTML = `x1= -(${valorb.replace('+', ' ')}) + ${Math.sqrt(delta)}`
        chegaraoresult8.style = "text-decoration: underline";
        chegaraoresult9.innerHTML = `${valora * 2}`
        chegaraoresult10.innerHTML = `x1= ${valorb.replace('-', ' ')} + ${Math.sqrt(delta)}`
        chegaraoresult10.style = "text-decoration: underline";
        chegaraoresult11.innerHTML = `${valora * 2}`
        chegaraoresult12.innerHTML = `x1= ${bhaskarax1}`
        chegaraoresult12.style = "text-decoration: underline";
        chegaraoresult13.innerHTML = `${bhaskarax1}`
        chegaraoresult14.innerHTML = `x1= ${bhaskarax1result}`

        expressaomontada2.innerHTML = `f= ${valora}x² + (${valorb}x) + (${valorc})`
        chegaraoresult15.innerHTML = `2 . ${valora}`
        chegaraoresult16.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - √${delta}`
        chegaraoresult16.style = "text-decoration: underline";
        chegaraoresult17.innerHTML = `x1= -(${valorb.replace('+', ' ')}) - ${Math.sqrt(delta)}`
        chegaraoresult17.style = "text-decoration: underline";
        chegaraoresult18.innerHTML = `${valora * 2}`
        chegaraoresult19.innerHTML = `x1= ${valorb.replace('-', ' ')} - ${Math.sqrt(delta)}`
        chegaraoresult19.style = "text-decoration: underline";
        chegaraoresult20.innerHTML = `${valora * 2}`
        chegaraoresult21.innerHTML = `x1= ${bhaskarax2}`
        chegaraoresult21.style = "text-decoration: underline";
        chegaraoresult22.innerHTML = `${valora * 2}`
        chegaraoresult23.innerHTML = `x1= ${bhaskarax2result}`
    }
    else
        window.alert('Insira os números corretamente')
}