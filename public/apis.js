export default (() => {
    const apis = {
        //rota de produção
        urlApi  : 'http://35.198.5.116',
        
        //rota de teste
        // urlApi :'http://127.0.0.1:3000',
  
        // api da jsonplaceholder
        urlClientes: 'https://jsonplaceholder.typicode.com/users',
      };

    apis.getFetch = async (router) => {
        const get = await fetch(router);
        return get.json();
    }
    apis.postFetch = async (router, data) => {
      const post = await fetch(router,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data) 
      });
  
      return await post.json();
    }

    apis.putFetch = async (router, data) => {
      const put = await fetch(router,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(data) 
      });
  
      return await put.json();
    }

    apis.deleteFetch = async (router) => {
        const excluir = await fetch(router, {
            method: 'DELETE',
            });
        return await excluir.json();   
    }

    return apis;
})()