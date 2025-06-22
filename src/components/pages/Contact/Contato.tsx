import { useForm } from "react-hook-form";

type FormInputs = {
    email: string;
    assunto: string;
    mensagem: string;
    urgencia: boolean;
};
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        alert(`
        Email: ${data.email}
        Assunto: ${data.assunto}
        Mensagem: ${data.mensagem}
        Urgencia: ${data.urgencia ? "Sim" : "Nao"}
        `);
        reset();
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2 style={{ textAlign: 'center'}}>Fale conosco</h2>

            <ul style={{ listStyleType: 'none', textAlign: 'center'}}>
                <li>Telefone: (11) 1234-5678</li>
            
            </ul>

            <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '1rem', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            }}>
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',
                    gap: '0.5rem',
                    
                 }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register("email", { required: `O email é obrigatório` })}
                        style={{ 
                            textAlign: 'center'
                        }} /> 
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                <div style={{ marginBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <label>Assunto:</label>
                    <input
                        type="text"
                        {...register("assunto", { required: `O assunto é obrigatório` })} 
                        style={{ 
                            textAlign: 'center'
                        }}
                        />
                    {errors.assunto && <p style={{ color: 'red' }}>{errors.assunto.message}</p>}
                </div>

                <div style={{ marginBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', scrollbarColor: 'red', scrollbarWidth: 'thin', overflow: 'auto', maxHeight: '300px', minHeight: '150px', padding: '0.5rem',  }}>
                    <label>Mensagem: </label>
                    <textarea 
                    {...register("mensagem", { required: `A mensagem é obrigatória` })} style={{
                        textAlign: 'center', 
                    }}
                    />
                    {errors.mensagem && <p style={{ color: 'red' }}>{errors.mensagem.message}</p>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column',  }}>
                    <label>
                    <input type="checkbox" {...register("urgencia")} style={{ marginRight: '0.5rem' }}/>
                     Marcar como urgente
                    </label>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;