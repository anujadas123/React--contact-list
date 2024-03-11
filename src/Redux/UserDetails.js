import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//==========================GET CONTACT=============================//

export const getContact = createAsyncThunk("getContact", async (data) => {
  const { page, limit, search } = data;
  try {
    const response = await axios.get(
      `http://localhost:4000/api/contact?page=${page}&limit=${limit}&search=${search}`
    );
    console.log("slice", response);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

export const getContactId = createAsyncThunk("getContactId", async (id) => {
  try {
    console.log("Contact id", id);
    const response = await axios.get(`http://localhost:4000/api/contact/${id}`);
    console.log("API response", response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

//===================================POST CONTACT===========================================//

export const postContact = createAsyncThunk("createcontact", async (data) => {
  console.log("postData", data);
  try {
    const response = await axios.post(
      "http://localhost:4000/api/contact/",
      data
    );
    console.log("response post data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

//======================PAGINATION==================================//

//========================EDIT CONTACT=============================//

export const EditContact = createAsyncThunk("editedcontact", async (data) => {
  console.log("editData", data);
  try {
    const response = await axios.put(
      `http://localhost:4000/api/contact/${data.id}`,
      data
    );
    console.log("response post data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

//========================DELETE CONTACT=============================//

export const deleteContact = createAsyncThunk("deleteContact", async (id) => {
  console.log("deleteData", id);
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/contact/${id}`
    );
    console.log("response post data", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

const ContactDetails = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    contact: [],
    status: "idle",
    error: null,
    search: "",
    page: 1,
    limit: 3,
    pageCount: "",
    totalLength  :0
    // selectedContactId: null,
  },
  reducers: {
    setSelectedContactId: (state, action) => {
      state.selectedContactId = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContact.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.contacts = action.payload.contacts;
      state.pageCount = action.payload.pageCount;
      state.totalLength = action.payload.totalCount;
      state.status = "success";
    });
    builder.addCase(getContact.rejected, (state) => {
      state.status = "fail";
    });

    builder.addCase(getContactId.fulfilled, (state, action) => {
      state.contact = action.payload;
      console.log("state", state.contact);
      state.status = "success";
    });

    // post
    builder.addCase(postContact.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postContact.fulfilled, (state, action) => {
      console.log("action", action);
      state.status = "success";
    });
    builder.addCase(postContact.rejected, (state) => {
      state.status = "fail";
    });

    // put
    builder.addCase(EditContact.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(EditContact.fulfilled, (state, action) => {
      state.contacts = action.payload.contacts;
      // const index = state.contacts.findIndex((c) => c.id === updatedContact.id);
      // if (index !== -1) {
      //   state.contacts[index] = updatedContact;
      // }
      state.status = "success";
    });
    builder.addCase(EditContact.rejected, (state) => {
      state.status = "fail";
    });

    // delete
    builder.addCase(deleteContact.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      // state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id);

      state.status = "success";
    });
    builder.addCase(deleteContact.rejected, (state) => {
      state.status = "fail";
    });
  },
});
export const { setSelectedContactId, setSearch } = ContactDetails.actions;

export default ContactDetails.reducer;
