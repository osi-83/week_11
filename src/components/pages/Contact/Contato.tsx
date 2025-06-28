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
        <div>
            <ul style={{ listStyleType: 'none', textAlign: 'center',
            margin: '1rem 0',            
            }}>
                <li>Telefone: (11) 1234-5678</li>
            </ul>

            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
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
                            textAlign:'center', border: '1px solid #ccc',
                            borderRadius: '4px',
                        }} /> 
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                <div style={{ marginBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <label>Assunto:</label>
                    <input
                        type="text"
                        {...register("assunto", { required: `O assunto é obrigatório` })} 
                        style={{ 
                            textAlign: 'center', border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        />
                    {errors.assunto && <p style={{ color: 'red' }}>{errors.assunto.message}</p>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem', width: '350px', height: '200px',  }}>
                    <label>Mensagem: </label>
                    <textarea 
                    {...register("mensagem", { required: `A mensagem é obrigatória` })} style={{
                        textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px', 
                        padding: '18px',
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

                <button style = {{ margin: '1rem', padding: '0.5rem', backgroundColor: '#000000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100px', height: '40px',  }} type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;