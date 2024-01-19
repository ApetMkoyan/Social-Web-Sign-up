export const sendRequest = () => {

  const get = async (url) => {
    const result = await fetch(url);
    return result.json();
  };

  const post = async (url, data) => {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return result.json()
  };

  const put = async (url, data) => {
    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return result.json();
  };

  const deleteData = async (url) => {
    const response = await fetch(url, { method: 'DELETE' })

  }

  return { get, post, put, deleteData };

};
