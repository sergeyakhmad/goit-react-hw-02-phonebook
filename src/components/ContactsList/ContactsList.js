// const ContactsList = items => (
//   <>
//     <ul>
//       {items.map(item => (
//         <li>
//           <p>{item}</p>
//         </li>
//       ))}
//     </ul>
//   </>
// );

function ContactsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
