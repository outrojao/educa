import { useState, useRef, useEffect } from 'react';
import styles from './Perfil.module.css'
import Header from '../../layout/Header';
import { useParams } from 'react-router-dom';

const Perfil = () => {

    const { name } = useParams()

    const fileInputRef = useRef() //<HTMLInputElement>
    const [imagemPerfil, setImagemPerfil] = useState() //<File>
    const [preview, setPreview] = useState() //<string>

    useEffect(() => {
        if(imagemPerfil) {
            const reader = new FileReader()
            reader.onloadend = () => {

            }
            reader.readAsDataURL(imagemPerfil)
        } else {

        }
    }, [imagemPerfil])

    

    return ( 
        <>
            <Header nomeUsuario={name}/>
            <div className={styles.perfil}>
                <main className={styles.perfil_layout}>
                    <section className={styles.perfil_infoPrincipais}>
                        <h2>Escolha uma foto</h2>
                        <button
                            onClick={() => {
                                fileInputRef.current.click()
                            }}
                        >
                            Adicionar imagem
                        </button>
                        <input 
                            type="file" 
                            style={{ display: "none" }} 
                            ref={fileInputRef}
                            accept='image/*'
                            onChange={(e) => {
                                const file = e.target.files[0]
                                if(file){
                                    setImagemPerfil(file)
                                } else {
                                    setImagemPerfil(null)
                                }
                            }}
                        />
                        <h1>{name}</h1>
                    </section>
                    <h3>Descrição</h3>
                    <section className={styles.perfil_descricao}>
                        <p contentEditable={true}>Mude seu perfil a vontade</p>
                    </section>
                </main>
            </div>
        </>
     );
}
 
export default Perfil;