import axios from "axios";

const backend_url =
  "https://react-native-course-ae856-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    `${backend_url}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${backend_url}/expenses.json`);

  const expenses = [];
  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    });
  }

  return expenses;
}

export async function deleteExpense(id) {
  return axios.delete(`${backend_url}/expenses/${id}.json`);
}

export async function updateExpense(id, expenseData) {
  return axios.patch(`${backend_url}/expenses/${id}.json`, expenseData);
}
