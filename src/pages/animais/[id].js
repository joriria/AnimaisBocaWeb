
        
        function Animais({objeto = {}}){
        return (
            <div>
                <p>{objeto.nome}</p>
                <p>{objeto.usuario}</p>
                <p>{objeto.descricao}</p>
            </div>
            )
            }

    export async function getStaticPaths() {
        const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
        const repo = await res.json()
        const objetos = await repo;
        const paths = objetos.map((objeto, index) => {
        return {params:{id:String(index)}};
        });
        return {
        paths,
        fallback: false,
        };
        }

        export const getStaticProps = (async (context) => {
            const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
            const repo = await res.json()
            const objetos = await repo;
            return {
            props: {objetos}
            }
            })
            
        
export default Animais;


    