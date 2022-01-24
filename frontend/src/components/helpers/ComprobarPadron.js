import clienteAxios from '../../config/axios'

const ComprobarPadron = (Padron) => {

  let data = clienteAxios.get('/terrenos').then(({ data }) => {  
    const result = (data.filter(num => num.padron === Padron).length===1? true : false);

    return result
  })

  return data
}

export default ComprobarPadron
