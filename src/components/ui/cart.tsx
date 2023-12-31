import { computeProductTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { Badge } from "./badge";
import CartItem from "./cart-item";
import { Separator } from "./separator";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">
            Você ainda não tem nenhum produto no carrinho.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2).replace(".", ",")}</p>
        </div>

        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>Gratis</p>
        </div>

        <div className="flex items-center justify-between text-xs">
          <p>Desconto</p>
          <p>-R$ {totalDiscount.toFixed(2).replace(".", ",")}</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2).replace(".", ",")}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
