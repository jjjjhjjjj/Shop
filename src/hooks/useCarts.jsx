import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart, addOrModifyCart, removeCart } from "../api/firebase";
import { useAuth } from "../context/authContext";

export default function useCarts() {
  const {
    user: { uid },
  } = useAuth();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    staleTime: 1000 * 60,
  });

  const addOrModifyItem = useMutation((cart) => addOrModifyCart(uid, cart), {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });

  const removeItem = useMutation((cartId) => removeCart(uid, cartId), {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });

  return { cartsQuery, addOrModifyItem, removeItem };
}
