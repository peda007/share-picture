const PERFECT_FRIEND = 'theme/perfect_friend' as const;
const MODERN_WORLD = 'theme/modern_world' as const;

export const perfect_friend = () => ({ type: PERFECT_FRIEND });
export const modern_world = () => ({ type: MODERN_WORLD });

type ChangeThemeAction = ReturnType<typeof perfect_friend> | ReturnType<typeof modern_world>;
interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'theme-pf',
};

function changeTheme(state: ThemeState = initialState, action: ChangeThemeAction) {
  switch (action.type) {
    case PERFECT_FRIEND:
      return {
        theme: 'theme-pf',
      };
    case MODERN_WORLD:
      return {
        theme: 'theme-mw',
      };
    default:
      return state;
  }
}

export default changeTheme;
