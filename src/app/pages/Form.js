import React from 'react';

//import { checkEmail } from './checkData';
//import { useForm } from '../hooks/useForm';

//import contact from './../../images/contacto.jpg';

export const Form = () => 
{
    /*const [state, handleInputChange] = useForm({
        customer: '',
        email: '',
        phone: '',
        message:''
    });

    const { customer, email, phone, message } = state;

    // Creo el state para validar los campos del formulario
    const [validCustomer, setValidCustomer] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validMessage, setValidMessage] = useState(true);

    const send = (e) =>
    {
        e.preventDefault();

        setValidCustomer(true);
        setValidEmail(true);
        setValidMessage(true);

        if (customer === '')
        {
            setValidCustomer(false);
            return;
        } else if (!checkEmail(email)) {
            setValidEmail(false);
            return;
        } else if (message === '') {
            setValidMessage(false);
            return;
        }

        alert("Form enviado");
    }*/

    return (
        <div className="animate__animated animate__fadeIn container d-flex justify-content-center p-3">
            <div className="help">
                <img src="https://raw.githubusercontent.com/Danielalvareziglesias/Daniel-lvarez/main/src/images/contacto.jpg" className="contact-img" alt="contacto.jpg" />

                <div className="d-flex justify-content-around flex-column pb-3">
                    <h2 className="mt-1">¿En qué puedo ayudarte?</h2>

                    <div>
                        <span className="title-contact">E-Mail</span>
                        <p>
                            <a 
                                className="contact"
                                href="mailto:danielalvareziglesias@gmail.com"
                                target="_blank" rel="noreferrer noopener"
                            >danielalvareziglesias@gmail.com</a>
                        </p>
                    </div>
                    
                    <div>
                        <span className="title-contact">Instagram</span>
                        <p>
                            <a 
                                className="contact"
                                href="https://www.instagram.com/danielalvarezigle1/"
                                target="_blank" rel="noreferrer noopener"
                            >@danielalvarezigle1</a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
