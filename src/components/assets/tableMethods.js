import emptyEntry from "./emptyEntry";

const tableMethods = {
  addRow() {
    const index = this.data.length + 1;
    const row = emptyEntry(index, `Партнёр ${index}`);
    if (this.data.length === 0) {
      this.rowCount = 0;
    }
    row.id = ++this.rowCount;
    const addRow = { ...row };
    this.data = [
      ...this.data.slice(0, index),
      addRow,
      ...this.data.slice(index)
    ];
  },

  removeRow() {
    const index = this.data.length;
    this.data = [...this.data.slice(0, index - 1)];
  }
};

export default tableMethods;
