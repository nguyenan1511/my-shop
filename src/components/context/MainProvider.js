import { createContext, memo, useContext, useState } from 'react';
import { message } from 'antd';

export const MainContext = createContext();

export const useMainContext = (props = {}) => {
    const context = useContext(MainContext);
    return context;
};

const MainProvider = ({ children, ...props }) => {
    const [listCart, setListCart] = useState([]);

    const addCart = (item) => {
        console.log('🚀item---->', item);

        let _listCart = [...listCart];
        if (_listCart.length > 0) {
            const indexProduct = _listCart.findIndex((it) => it.id === item.id);
            if (indexProduct == -1) {
                _listCart.push(item);
            } else {
                _listCart[indexProduct].amount = _listCart[indexProduct].amount + 1;
            }
            setListCart(_listCart);
            message.success(`Đã thêm vào giỏ hàng`);
        } else {
            item.amount = 1;
            _listCart.push(item);
            setListCart(_listCart);
            message.success(`Đã thêm vào giỏ hàng`);
        }
    };

    console.log('🚀listCart---->', listCart);

    return (
        <MainContext.Provider
            value={{
                listCart,
                setListCart,
                addCart,
            }}
            {...props}
        >
            {children}
        </MainContext.Provider>
    );
};

export default memo(MainProvider);
