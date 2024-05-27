import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import React from "react";

function ExpenseForm() {
  const [inputValues, setInputValues] = React.useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangeHandler = (inputIdentifier, inputValue) => {
    setInputValues((prevState) => ({
      ...prevState,
      [inputIdentifier]: inputValue,
    }));
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}> Your Expense Form </Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <View>
        <Input
          label="Description"
          textInputConfig={{
            placeholder: "Description",
            multiline: true,
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputValues.description,
          }}
        />
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    padding: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 8,
  },
});
