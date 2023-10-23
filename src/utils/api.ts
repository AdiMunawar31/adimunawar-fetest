import client from "../global/client";

const api = (() => {
  async function getAllContacts() {
    const response = await client.requestAPI({
      method: "GET",
      endpoint: `/contact`,
    });

    console.log("res : ", response);

    const { data } = response;
    console.log("data : ", data);

    if (response.isError) {
      throw new Error("Error when get all contacts!");
    }

    return data;
  }

  async function getContactDetail(contactId: string) {
    const response = await client.requestAPI({
      method: "GET",
      endpoint: `/contact/${contactId}`,
    });

    if (response.isError) {
      throw new Error("Error when get detail contacts!");
    }

    const { data } = response;

    return data;
  }

  async function addContact(contact: any) {
    const response = await client.requestAPI({
      method: "POST",
      endpoint: `/contact`,
      data: contact,
    });

    if (response.isError) {
      throw new Error("Error when add contacts!");
    }

    return response;
  }

  async function editContact(contact: any, contactId: string) {
    const response = await client.requestAPI({
      method: "PUT",
      endpoint: `/contact/${contactId}`,
      data: contact,
    });

    if (response.isError) {
      throw new Error("Error when edit contacts!");
    }

    return response;
  }

  async function deleteContact(contactId: string) {
    const response = await client.requestAPI({
      method: "DELETE",
      endpoint: `/contact/${contactId}`,
    });

    if (response.isError) {
      throw new Error("Error when delete contacts!");
    }

    return response;
  }

  return {
    getAllContacts,
    getContactDetail,
    addContact,
    editContact,
    deleteContact,
  };
})();

export default api;
