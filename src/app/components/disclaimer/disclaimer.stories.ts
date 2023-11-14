import { DisclaimerComponent } from './disclaimer.component';
import {
  applicationConfig,
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';

type DisclaimerArgs = DisclaimerComponent & { content: string };

const meta: Meta<DisclaimerArgs> = {
  title: 'UI/Disclaimer',
  component: DisclaimerComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  render: ({ content, ...args }) => ({
    props: args,
    template: `<app-disclaimer ${argsToTemplate(
      args
    )}>${content}</app-disclaimer>`,
  }),
};

export default meta;
type Story = StoryObj<DisclaimerArgs>;

export const Default: Story = {
  args: {
    mode: 'info',
    icon: 'home',
    content: 'texto de prueba',
  },
};
