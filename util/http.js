import axios from "axios";

const storeExpense = (expenseData) => {
  const baseURL =
    "https://react-native-course-ae856-default-rtdb.firebaseio.com";

  axios.post(`${baseURL}/expenses.json`, expenseData);
};

export { storeExpense };
