import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//==========================GET CONTACT=============================//

export const getContact = createAsyncThunk("getContact", async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/contact");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});


export const getContactId = createAsyncThunk("getContactId", async (id) => {
  try {
    console.log("Contact id",id);
    const response = await axios.get(`http://localhost:4000/api/contact/${id}`);
    console.log("API response",response.data);
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

export const deleteContact = createAsyncThunk("deleteContact", async (data) => {
  console.log("deleteData", data);
  try {
    const response = await axios.delete(
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

const ContactDetails = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContact.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.status = "success";
    });
    builder.addCase(getContact.rejected, (state) => {
      state.status = "fail";
    });

    builder.addCase(getContactId.fulfilled, (state, action) => {
      state.status = "success";
      // state.contacts = action.payload
    });

    // post
    builder.addCase(postContact.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
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
      const updatedContact = action.payload;
      const index = state.contacts.findIndex((c) => c.id === updatedContact.id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
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

export default ContactDetails.reducer;

