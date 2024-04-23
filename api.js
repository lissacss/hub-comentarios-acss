const apiUpdatePessoa = async (id, pessoaEdit) => {
    try {
      const res = await fetch(`${URL_API}/pessoa/atualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pessoaEdit),
      });
  
      if (!res.ok) {
        throw new Error('Response not ok: ', res)
      }
      return await res.json();;
  
    } catch (error) {
      throw new Error(error.message)
    }
  }