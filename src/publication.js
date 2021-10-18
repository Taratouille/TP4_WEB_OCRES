import { FaThumbsUp } from 'react-icons/fa';

export function Publi(props) {
    return (
        <section class="poste" style={{background: props.profil.background}}>
            <div>{props.profil.publi.des}</div>
            <footer>
                <div>{props.profil.publi.like}</div> 
                <div class="icon"><FaThumbsUp/> </div>
                <button style={{background: props.profil.background}} onClick={props.onClick}> Like </button>
            </footer>
        </section>
    );
  }