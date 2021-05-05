import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { modern_world, perfect_friend } from '../modules/theme';

export default function useTheme() {
  const theme = useSelector((state: RootState) => state.changeTheme.theme);
  const dispatch = useDispatch();

  const toPerfectFriends = useCallback(() => dispatch(perfect_friend()), [dispatch]);
  const toModernWorld = useCallback(() => dispatch(modern_world()), [dispatch]);

  return {
    theme,
    toPerfectFriends,
    toModernWorld,
  };
}
