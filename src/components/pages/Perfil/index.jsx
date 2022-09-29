import { useState, useRef, useEffect } from 'react';
import styles from './Perfil.module.css'
import Header from '../../layout/Header';
import { useParams } from 'react-router-dom';
import iconPerfil from '../../../imagens/perfil.png'
import trofeuPerfil from '../../../imagens/achievement_icon.png'
import { api } from '../../../services/api';

const Perfil = () => {

    const { name } = useParams()

    const fileInputRef = useRef()
    const [usuario, setUsuario] = useState([])
    const [imagemPerfil, setImagemPerfil] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        api.get(`/usuarios?name=${name}`)
        .then((response) => {
            setUsuario(response.data[0])
        })
    }, [name])

    console.log(usuario.trofeu)

    useEffect(() => {
        if(imagemPerfil){
            const leitorDoArquivo = new FileReader()
            leitorDoArquivo.onloadend = () => {
                setPreview(leitorDoArquivo.result)
            }
            leitorDoArquivo.readAsDataURL(imagemPerfil)
        } else {
            setPreview(null)
        }
    }, [imagemPerfil])

    console.log(preview)

    return ( 
        <>
            <Header nomeUsuario={name}/>
            <div className={styles.perfil}>
                <main className={styles.perfil_layout}>
                    <section className={styles.perfil_infoPrincipais}>
                        {preview ? ( 
                            <img 
                                src={preview} 
                                alt={`Imagem de Perfil de ${name}`} 
                                onClick={() => {
                                    fileInputRef.current.click()
                                }}
                            /> 
                        )
                        : (
                            <div>
                                <h2>Selecione uma foto</h2>
                                <img 
                                    src={iconPerfil}
                                    alt="Imagem Perfil"
                                    onClick={() => {
                                        fileInputRef.current.click()
                                    }}
                                />
                            </div>
                        )}
                        <input 
                            type="file" 
                            style={{ display: "none" }} 
                            ref={fileInputRef}
                            accept='image/*'
                            onChange={(e) => {
                                const imagem = e.target.files[0]
                                if(imagem){
                                    setImagemPerfil(imagem)
                                } else {
                                    setImagemPerfil(null)
                                }
                            }}
                        />
                        <h1>{name}</h1>
                        {usuario.trofeu && <img className={styles.trofeu} src={trofeuPerfil} alt="trofeu"/>}
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