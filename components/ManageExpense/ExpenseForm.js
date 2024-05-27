import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import React from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, initialData }) {
  const [inputs, setInputs] = React.useState({
    amount: {
      value: initialData?.amount.toString() || "",
      isValid: true,
    },
    date: {
      value: initialData?.date ? getFormattedDate(initialData.date) : "",
      isValid: true,
    },
    description: {
      value: initialData?.description || "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, inputValue) => {
    setInputs((curInputs) => ({
      ...curInputs,
      [inputIdentifier]: { value: inputValue, isValid: true },
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: parseFloat(inputs.amount.value),
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid =
      expenseData.date instanceof Date && !isNaN(expenseData.date);
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // alert("Please enter valid data!");
      setInputs((curInputs) => ({
        amount: {
          value: curInputs.amount.value,
          isValid: amountIsValid,
        },
        date: {
          value: curInputs.date.value,
          isValid: dateIsValid,
        },
        description: {
          value: curInputs.description.value,
          isValid: descriptionIsValid,
        },
      }));
      return;
    }

    onSubmit(expenseData);
  };

  const formIsValid = () => {
    return (
      inputs.amount.isValid && inputs.date.isValid && inputs.description.isValid
    );
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}> Your Expense Form </Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <View>
        <Input
          label="Description"
          invalid={!inputs.description.isValid}
          textInputConfig={{
            placeholder: "Description",
            multiline: true,
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
        />
        {formIsValid() ? null : (
          <Text style={{ color: "red", textAlign: "center" }}>
            Please enter valid data!
          </Text>
        )}
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
