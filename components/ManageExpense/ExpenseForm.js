import { View, Button, StyleSheet } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler(text) {
    console.log(text);
  }
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          placeholder: "Description",
          multiline: true,
        }}
      />
    </View>
  );
}

export default ExpenseForm;
