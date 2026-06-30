import React from 'react';
import Autoridade from './componentes/autoridade/Autoridade';
import Formulario from './componentes/formulario/Formulario';
import Oferecimento from './componentes/oferecimento/oferecimento';
import Beneficios from './componentes/beneficios/Beneficios';
import Depoimentos from './componentes/depoimentos/Depoimentos';
import HeroSection from './componentes/hero/HeroSection';
import FAQ from './componentes/faq/FAQ';
import Footer from './componentes/footer/Footer';
import Whatsapp from './tools/Whatsapp';


function app02() {
    return (
        <>
            <HeroSection/>
            <Oferecimento/>
            <Beneficios/>
            <Autoridade/>
            <Depoimentos/>
            <FAQ/>
            <Formulario/>
            <Footer/>
            <Whatsapp/>
        </>
    );
}

export default app02;