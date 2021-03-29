	import React from 'react';
 
const CommonTableRow = ({ children }) => {
  console.log(children)
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}
 
export default CommonTableRow;