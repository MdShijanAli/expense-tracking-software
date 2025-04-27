import { formatNumbersWithCommas } from "./../../../../utils/formatNumbersWithCommas";

export default function TableRowItem({ rowData, index }) {
  const { category, notes, money, time, date } = rowData;
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {index + 1}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
          {date}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          <span className="bg-green-600 text-white px-2 py-1 rounded-lg">
            {category}
          </span>
        </td>
        <td class="px-6 py-4 font-bold whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {formatNumbersWithCommas(money)} TK
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {notes}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {time}
        </td>
      </tr>
    </>
  );
}
