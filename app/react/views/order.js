import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { autobind } from 'core-decorators';

require('./order.less');

export default class ViewOrder extends Component {
  static propTypes = {
    productList: PropTypes.array,
    sizeList: PropTypes.array,
    makeOrder: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      selectedItem: {},
    };
  }

  confirmOrder(item) {
    this.setState({
      isDialogOpen: true,
      selectedItem: item,
    });
  }

  @autobind
  cancelOrder() {
    this.setState({ isDialogOpen: false, selectedItem: {} });
  }

  @autobind
  sendOrder() {
    this.props.makeOrder(this.state.selectedItem.Id);
    this.setState({ isDialogOpen: false, selectedItem: {} });
  }

  render() {
    const { productList, sizeList } = this.props;
    const { SizeName, Name: ProductName, Price } = this.state.selectedItem;
    return (
      <div id="order-view">
        <div>
          <Dialog
            title="Confirmation"
            actions={[
              <FlatButton
                label="Cancel"
                primary
                onTouchTap={this.cancelOrder}
              />,
              <FlatButton
                label="Submit"
                primary
                keyboardFocused
                onTouchTap={this.sendOrder}
              />,
            ]}
            modal={false}
            open={this.state.isDialogOpen}
            onRequestClose={this.cancelOrder}
          >
            <p>Are you sure you want to order <b>{SizeName} {ProductName}</b>
              &nbsp;which cost <i>{Price}$</i> ?</p>
          </Dialog>
        </div>
        <h2>Order</h2>
        <div className="menu__table">
          <header>
            <div className="header__item drink">
              Drinks
            </div>
            {sizeList.map(({ Name }) => <div key={Name} className="header__item size">{Name}</div>)}
          </header>
          <section>
            {productList.map(({ Type, sizeList: productSizeList, Name }) => (
              <div key={Name} className="menu__row" data-drink-type={Type}>
                <div className="menu__item drink">{Name}</div>
                {productSizeList.map(({ Id, SizeName, Price }) => (
                  <div className="menu__item size" key={Id}>
                    <RaisedButton fullWidth primary onClick={() => this.confirmOrder({ Id, SizeName, Price, Name })}>
                      <div className="button-inner">
                        <span className="size-name">{SizeName}</span>
                        <span className="price">{Price}$</span>
                      </div>
                    </RaisedButton>
                  </div>
                ))}
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
}
