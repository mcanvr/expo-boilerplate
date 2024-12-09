import React, { Children, ReactNode, isValidElement } from 'react';

/**
 * Case component that renders children if the condition is true.
 */
type CaseProps = {
  condition: boolean;
  children: ReactNode;
};

const Case: React.FC<CaseProps> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

/**
 * Default component that renders the default children.
 */
type DefaultProps = {
  children: ReactNode;
};

const Default: React.FC<DefaultProps> = ({ children }) => {
  return <>{children}</>;
};

/**
 * Switch component that conditionally renders its children based on the first Case
 * with a true condition or renders the Default component if no case is true.
 */
type SwitchProps = {
  children: ReactNode;
};

const Switch: React.FC<SwitchProps> = ({ children }) => {
  let matchChild: ReactNode | null = null;
  let defaultCase: ReactNode | null = null;

  Children.forEach(children, (child) => {
    if (!matchChild && isValidElement(child)) {
      if (child.type === Case) {
        const caseElement = child as React.ReactElement<CaseProps>;
        if (caseElement.props.condition) {
          matchChild = caseElement.props.children;
        }
      } else if (child.type === Default) {
        defaultCase = (child as React.ReactElement<DefaultProps>).props.children;
      }
    }
  });

  return matchChild ?? defaultCase ?? null;
};

export { Case, Default, Switch };
