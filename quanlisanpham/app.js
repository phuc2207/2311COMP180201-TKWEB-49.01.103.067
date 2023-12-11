// File: app.js
class ProductManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            newProduct: {
                name: '',
                price: ''
            }
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            newProduct: {
                ...prevState.newProduct,
                [name]: value
            }
        }));
    }

    addProduct = () => {
        if (this.state.newProduct.name && this.state.newProduct.price) {
            this.setState(prevState => ({
                products: [
                    ...prevState.products,
                    {
                        id: prevState.products.length + 1,
                        name: prevState.newProduct.name,
                        price: prevState.newProduct.price
                    }
                ],
                newProduct: {
                    name: '',
                    price: ''
                }
            }));
        }
    }

    deleteProduct = (id) => {
        this.setState(prevState => ({
            products: prevState.products.filter(product => product.id !== id)
        }));
    }

    render() {
        return (
            <div>
                <h2>Quản lý sản phẩm</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => this.deleteProduct(product.id)}>Xóa</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <h3>Thêm sản phẩm</h3>
                    <label htmlFor="productName">Tên sản phẩm:</label>
                    <input type="text" id="productName" name="name" value={this.state.newProduct.name} onChange={this.handleInputChange} />

                    <label htmlFor="productPrice">Giá:</label>
                    <input type="number" id="productPrice" name="price" value={this.state.newProduct.price} onChange={this.handleInputChange} />

                    <button type="button" onClick={this.addProduct}>Thêm sản phẩm</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ProductManager />, document.getElementById('root'));
