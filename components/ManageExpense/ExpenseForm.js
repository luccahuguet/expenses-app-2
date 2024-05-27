import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler(text) {
    console.log(text);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}> Your Expense Form </Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
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
      </View>
      <View>
        <Input
          label="Description"
          textInputConfig={{
            placeholder: "Description",
            multiline: true,
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
