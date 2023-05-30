export const styles = {
productContainer: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
             },
},
productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
},
productDescription: {
    fontSize: '14px',
    marginBottom: '8px',
},
productCategory: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '4px',
},
productPrice: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '4px',
},
productDiscount: {
    fontSize: '12px',
    color: '#f00',
    marginBottom: '4px',
},
};