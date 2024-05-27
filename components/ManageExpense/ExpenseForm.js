import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import React from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, initialData }) {
  const [inputValues, setInputValues] = React.useState({
    amount: initialData ? initialData.amount.toString() : "",
    date: initialData ? getFormattedDate(initialData.date) : "",
    description: initialData ? initialData.description : "",
  });

  const inputChangeHandler = (inputIdentifier, inputValue) => {
    setInputValues((prevState) => ({
      ...prevState,
      [inputIdentifier]: inputValue,
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: parseFloat(inputValues.amount),
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
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
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
