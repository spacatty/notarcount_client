import emptyEntry from "./emptyEntry";

const tableMethods = {
  addRow() {
    const index = this.tableData.length + 1;
    const row = emptyEntry(index, `Партнёр ${index}`, index);
    if (this.tableData.length === 0) {
      this.rowCount = 0;
    }
    row.id = ++this.rowCount;
    const addRow = { ...row };
    this.tableData = [
      ...this.tableData.slice(0, index),
      addRow,
      ...this.tableData.slice(index)
    ];
  },

  removeRow() {
    const index = this.tableData.length;
    this.tableData = [...this.tableData.slice(0, index - 1)];
  }
};

export default tableMethods;
