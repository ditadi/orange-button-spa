
export interface GetButtonStateInput {
  // Optional input parameters - none needed for static button
}

export interface ButtonState {
  label: string;
  color: string;
  disabled: boolean;
  visible: boolean;
}

export const getButtonState = async (input?: GetButtonStateInput): Promise<ButtonState> => {
  // Return static button state - orange button with "Click here" label
  return {
    label: "Click here",
    color: "orange",
    disabled: false,
    visible: true
  };
};
