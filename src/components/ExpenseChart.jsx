import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function ExpenseChart({ expenses }) {

  const data = expenses.map((item) => ({
    name: item.title,
    value: item.amount,
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
  ];

  return (

    <PieChart width={400} height={400}>

      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        label
      >

        {
          data.map((entry, index) => (

            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))
        }

      </Pie>

      <Tooltip />

      <Legend />

    </PieChart>
  );
}

export default ExpenseChart;