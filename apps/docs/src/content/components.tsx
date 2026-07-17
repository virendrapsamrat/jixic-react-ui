import type { ReactNode } from "react";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  EmptyState,
  Input,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  Textarea,
  Tooltip,
} from "@jixic/react-ui";
import { ModalPreview } from "../components/ModalPreview";

export interface PropRow {
  defaultValue: string;
  description: string;
  name: string;
  required: boolean;
  type: string;
}

export interface ComponentDoc {
  accessibility: string[];
  code: string;
  description: string;
  name: string;
  preview: ReactNode;
  props: PropRow[];
  slug: string;
}

export const componentDocs: ComponentDoc[] = [
  {
    accessibility: [
      "Uses a native button element.",
      "Loading state disables interaction and exposes a status indicator.",
      "Focus-visible styling is tokenized for light and dark themes.",
    ],
    code: `import { Button } from "@jixic/react-ui";

<Button variant="primary">Save changes</Button>`,
    description:
      "A tokenized action button with variants, sizes, icons, disabled state, and loading state.",
    name: "Button",
    preview: (
      <>
        <Button>Save changes</Button>
        <Button variant="secondary">Cancel</Button>
        <Button isLoading>Saving</Button>
      </>
    ),
    props: [
      {
        defaultValue: '"primary"',
        description: "Visual treatment for the action.",
        name: "variant",
        required: false,
        type: '"primary" | "secondary" | "ghost" | "danger"',
      },
      {
        defaultValue: '"md"',
        description: "Button size.",
        name: "size",
        required: false,
        type: '"sm" | "md" | "lg"',
      },
      {
        defaultValue: "false",
        description: "Shows a spinner and disables the button.",
        name: "isLoading",
        required: false,
        type: "boolean",
      },
    ],
    slug: "button",
  },
  {
    accessibility: [
      "Associates label and input using htmlFor/id.",
      "Error text is connected with aria-describedby and announced with role alert.",
      "Invalid state sets aria-invalid.",
    ],
    code: `import { Input } from "@jixic/react-ui";

<Input label="Email" helperText="Use your work email." type="email" />`,
    description:
      "A form input with label, helper text, error state, disabled state, and native input props.",
    name: "Input",
    preview: (
      <Input
        helperText="Use your work email."
        label="Email"
        placeholder="person@example.com"
        type="email"
      />
    ),
    props: [
      {
        defaultValue: "-",
        description: "Visible label for the control.",
        name: "label",
        required: false,
        type: "string",
      },
      {
        defaultValue: "-",
        description: "Supplementary field guidance.",
        name: "helperText",
        required: false,
        type: "string",
      },
      {
        defaultValue: "-",
        description: "Validation message.",
        name: "error",
        required: false,
        type: "string",
      },
    ],
    slug: "input",
  },
  {
    accessibility: [
      "Associates label and textarea using htmlFor/id.",
      "Helper and error text are connected with aria-describedby.",
      "Invalid state sets aria-invalid and exposes the error with role alert.",
    ],
    code: `import { Textarea } from "@jixic/react-ui";

<Textarea label="Notes" helperText="Add context for your team." />`,
    description: "A multi-line form control with label, helper text, and error state.",
    name: "Textarea",
    preview: <Textarea helperText="Add context for your team." label="Notes" />,
    props: [
      {
        defaultValue: "4",
        description: "Visible row count.",
        name: "rows",
        required: false,
        type: "number",
      },
      {
        defaultValue: "-",
        description: "Validation message.",
        name: "error",
        required: false,
        type: "string",
      },
    ],
    slug: "textarea",
  },
  {
    accessibility: [
      "Uses a native checkbox input.",
      "The visible label toggles the input.",
      "Description and error text are connected to the control.",
    ],
    code: `import { Checkbox } from "@jixic/react-ui";

<Checkbox label="Accept terms" description="Required before continuing." />`,
    description: "A labeled checkbox for single binary choices and confirmations.",
    name: "Checkbox",
    preview: <Checkbox description="Required before continuing." label="Accept terms" />,
    props: [
      {
        defaultValue: "-",
        description: "Visible label for the checkbox.",
        name: "label",
        required: true,
        type: "string",
      },
      {
        defaultValue: "-",
        description: "Supporting text below the label.",
        name: "description",
        required: false,
        type: "string",
      },
    ],
    slug: "checkbox",
  },
  {
    accessibility: [
      "Uses a native checkbox input with role switch.",
      "The visible label toggles the switch.",
      "State remains available through checked semantics.",
    ],
    code: `import { Switch } from "@jixic/react-ui";

<Switch label="Email notifications" defaultChecked />`,
    description: "A labeled switch for immediate on/off settings.",
    name: "Switch",
    preview: <Switch defaultChecked label="Email notifications" />,
    props: [
      {
        defaultValue: "-",
        description: "Visible label for the switch.",
        name: "label",
        required: true,
        type: "string",
      },
      {
        defaultValue: "-",
        description: "Supporting text below the label.",
        name: "description",
        required: false,
        type: "string",
      },
    ],
    slug: "switch",
  },
  {
    accessibility: [
      "Uses a native select element.",
      "Associates label and helper/error text with the control.",
      "Disabled options are passed through to native option elements.",
    ],
    code: `import { Select } from "@jixic/react-ui";

<Select
  label="Role"
  options={[
    { label: "Admin", value: "admin" },
    { label: "Member", value: "member" },
  ]}
/>`,
    description: "A labeled native select with tokenized styling and validation state.",
    name: "Select",
    preview: (
      <Select
        label="Role"
        options={[
          { label: "Admin", value: "admin" },
          { label: "Member", value: "member" },
          { label: "Viewer", value: "viewer" },
        ]}
      />
    ),
    props: [
      {
        defaultValue: "-",
        description: "Options rendered in the native select.",
        name: "options",
        required: true,
        type: "SelectOption[]",
      },
      {
        defaultValue: "-",
        description: "Placeholder option with empty value.",
        name: "placeholder",
        required: false,
        type: "string",
      },
    ],
    slug: "select",
  },
  {
    accessibility: [
      "Uses native radio inputs grouped in a fieldset.",
      "The group label is rendered as a legend.",
      "Each option can include additional descriptive text.",
    ],
    code: `import { Radio, RadioGroup } from "@jixic/react-ui";

<RadioGroup label="Plan">
  <Radio label="Starter" name="plan" value="starter" />
  <Radio label="Pro" name="plan" value="pro" />
</RadioGroup>`,
    description: "A semantic radio group for selecting one option from a short list.",
    name: "RadioGroup",
    preview: (
      <RadioGroup label="Plan">
        <Radio defaultChecked label="Starter" name="docs-plan" value="starter" />
        <Radio label="Pro" name="docs-plan" value="pro" />
      </RadioGroup>
    ),
    props: [
      {
        defaultValue: "-",
        description: "Group label rendered as the fieldset legend.",
        name: "label",
        required: true,
        type: "string",
      },
      {
        defaultValue: "-",
        description: "Radio options.",
        name: "children",
        required: true,
        type: "ReactNode",
      },
    ],
    slug: "radio-group",
  },
  {
    accessibility: [
      "Uses semantic children by default so consumers can choose headings and landmarks.",
      "Borders and backgrounds meet contrast requirements in both themes.",
    ],
    code: `import { Card, CardContent, CardHeader } from "@jixic/react-ui";

<Card>
  <CardHeader>Plan</CardHeader>
  <CardContent>Production-ready components.</CardContent>
</Card>`,
    description: "Composable content container with header, content, and footer slots.",
    name: "Card",
    preview: (
      <Card style={{ maxWidth: 320 }}>
        <CardHeader>Starter</CardHeader>
        <CardContent>Everything needed for a clean UI surface.</CardContent>
        <CardFooter>
          <Button size="sm">Choose</Button>
        </CardFooter>
      </Card>
    ),
    props: [
      {
        defaultValue: "-",
        description: "Accepts native div props.",
        name: "CardProps",
        required: false,
        type: "HTMLAttributes<HTMLDivElement>",
      },
    ],
    slug: "card",
  },
  {
    accessibility: [
      "Rendered as text so status is available to assistive technology.",
      "Use concise text rather than color alone.",
    ],
    code: `import { Badge } from "@jixic/react-ui";

<Badge variant="success">Active</Badge>`,
    description: "Compact status label for metadata and state.",
    name: "Badge",
    preview: (
      <>
        <Badge>Neutral</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Review</Badge>
        <Badge variant="danger">Blocked</Badge>
      </>
    ),
    props: [
      {
        defaultValue: '"neutral"',
        description: "Badge status variant.",
        name: "variant",
        required: false,
        type: '"neutral" | "success" | "warning" | "danger"',
      },
    ],
    slug: "badge",
  },
  {
    accessibility: [
      "Images include the provided alt text.",
      "Fallback initials are visible text when no image source is supplied.",
      "Use meaningful alt text for people or entities.",
    ],
    code: `import { Avatar } from "@jixic/react-ui";

<Avatar alt="Ada Lovelace" />`,
    description: "A circular user or entity avatar with image and initials fallback.",
    name: "Avatar",
    preview: (
      <>
        <Avatar alt="Ada Lovelace" />
        <Avatar alt="Grace Hopper" fallback="GH" size="lg" />
      </>
    ),
    props: [
      {
        defaultValue: "-",
        description: "Accessible image text and initials source.",
        name: "alt",
        required: true,
        type: "string",
      },
      {
        defaultValue: '"md"',
        description: "Avatar size.",
        name: "size",
        required: false,
        type: '"sm" | "md" | "lg"',
      },
    ],
    slug: "avatar",
  },
  {
    accessibility: [
      "Danger and warning variants use role alert.",
      "Info and success variants use role status.",
      "Title and body remain readable without relying on icons.",
    ],
    code: `import { Alert } from "@jixic/react-ui";

<Alert title="Saved" variant="success">Your changes are live.</Alert>`,
    description: "Inline feedback for informational, success, warning, and danger messages.",
    name: "Alert",
    preview: (
      <Alert title="Saved" variant="success">
        Your changes are live.
      </Alert>
    ),
    props: [
      {
        defaultValue: '"info"',
        description: "Message tone.",
        name: "variant",
        required: false,
        type: '"info" | "success" | "warning" | "danger"',
      },
      {
        defaultValue: "-",
        description: "Optional message heading.",
        name: "title",
        required: false,
        type: "ReactNode",
      },
    ],
    slug: "alert",
  },
  {
    accessibility: [
      "Uses role dialog and aria-modal.",
      "Escape and overlay click close the dialog.",
      "Focus is trapped while open and restored on close.",
    ],
    code: `import { Modal } from "@jixic/react-ui";

<Modal isOpen={isOpen} onOpenChange={setIsOpen} title="Edit profile">
  Profile settings
</Modal>`,
    description: "Accessible dialog for focused workflows and confirmations.",
    name: "Modal",
    preview: <ModalPreview />,
    props: [
      {
        defaultValue: "-",
        description: "Controls whether the dialog is visible.",
        name: "isOpen",
        required: true,
        type: "boolean",
      },
      {
        defaultValue: "-",
        description: "Called when the modal requests open state changes.",
        name: "onOpenChange",
        required: true,
        type: "(isOpen: boolean) => void",
      },
      {
        defaultValue: "-",
        description: "Accessible dialog title.",
        name: "title",
        required: true,
        type: "ReactNode",
      },
    ],
    slug: "modal",
  },
  {
    accessibility: [
      "Uses role tablist, tab, and tabpanel.",
      "Selected tab state is exposed with aria-selected.",
      "Panel content is linked back to the active tab.",
    ],
    code: `import { Tabs } from "@jixic/react-ui";

<Tabs
  items={[
    { label: "Overview", value: "overview", content: "Overview content" },
    { label: "Billing", value: "billing", content: "Billing content" },
  ]}
/>`,
    description: "A compact tab interface for switching between related panels.",
    name: "Tabs",
    preview: (
      <Tabs
        items={[
          { content: "Project activity and health.", label: "Overview", value: "overview" },
          { content: "Invoices, plan, and seats.", label: "Billing", value: "billing" },
        ]}
      />
    ),
    props: [
      {
        defaultValue: "-",
        description: "Tab labels, values, and panel content.",
        name: "items",
        required: true,
        type: "TabItem[]",
      },
      {
        defaultValue: "-",
        description: "Controlled selected tab value.",
        name: "value",
        required: false,
        type: "string",
      },
    ],
    slug: "tabs",
  },
  {
    accessibility: [
      "Tooltip content is rendered with role tooltip.",
      "Content appears on hover and keyboard focus within the trigger.",
      "Do not put essential information only in a tooltip.",
    ],
    code: `import { Button, Tooltip } from "@jixic/react-ui";

<Tooltip content="Create a new project">
  <Button>New</Button>
</Tooltip>`,
    description: "A lightweight tooltip wrapper for short supporting hints.",
    name: "Tooltip",
    preview: (
      <Tooltip content="Create a new project">
        <Button size="sm">New</Button>
      </Tooltip>
    ),
    props: [
      {
        defaultValue: "-",
        description: "Trigger element.",
        name: "children",
        required: true,
        type: "ReactNode",
      },
      {
        defaultValue: "-",
        description: "Tooltip body.",
        name: "content",
        required: true,
        type: "ReactNode",
      },
    ],
    slug: "tooltip",
  },
  {
    accessibility: [
      "Uses role status.",
      "Requires a label when the loading context is not visually obvious.",
    ],
    code: `import { Spinner } from "@jixic/react-ui";

<Spinner label="Loading profile" />`,
    description: "Animated loading indicator with accessible status text.",
    name: "Spinner",
    preview: (
      <>
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
      </>
    ),
    props: [
      {
        defaultValue: '"Loading"',
        description: "Accessible status label.",
        name: "label",
        required: false,
        type: "string",
      },
      {
        defaultValue: '"md"',
        description: "Spinner size.",
        name: "size",
        required: false,
        type: '"sm" | "md" | "lg"',
      },
    ],
    slug: "spinner",
  },
  {
    accessibility: [
      "Marked aria-hidden because it is decorative.",
      "Pair skeletons with surrounding loading text when needed.",
    ],
    code: `import { Skeleton } from "@jixic/react-ui";

<Skeleton height={24} width="60%" />`,
    description: "Placeholder loading block for preserving layout while content loads.",
    name: "Skeleton",
    preview: (
      <div style={{ display: "grid", gap: 12, width: "100%" }}>
        <Skeleton height={20} width="45%" />
        <Skeleton height={16} />
        <Skeleton height={16} width="75%" />
      </div>
    ),
    props: [
      {
        defaultValue: '"1rem"',
        description: "CSS height.",
        name: "height",
        required: false,
        type: "number | string",
      },
      {
        defaultValue: '"100%"',
        description: "CSS width.",
        name: "width",
        required: false,
        type: "number | string",
      },
    ],
    slug: "skeleton",
  },
  {
    accessibility: [
      "Uses a section and heading for discoverability.",
      "Action slot accepts native buttons or links.",
      "Icon slot is hidden from assistive technology.",
    ],
    code: `import { Button, EmptyState } from "@jixic/react-ui";

<EmptyState
  action={<Button>Create project</Button>}
  description="Start by creating your first project."
  title="No projects"
/>`,
    description: "A centered empty state with title, supporting text, optional icon, and action.",
    name: "EmptyState",
    preview: (
      <EmptyState
        action={<Button size="sm">Create project</Button>}
        description="Start by creating your first project."
        title="No projects"
      />
    ),
    props: [
      {
        defaultValue: "-",
        description: "Primary heading.",
        name: "title",
        required: true,
        type: "ReactNode",
      },
      {
        defaultValue: "-",
        description: "Supporting copy.",
        name: "description",
        required: false,
        type: "ReactNode",
      },
      {
        defaultValue: "-",
        description: "Primary follow-up action.",
        name: "action",
        required: false,
        type: "ReactNode",
      },
    ],
    slug: "empty-state",
  },
];

export function getComponentDoc(slug: string) {
  return componentDocs.find((component) => component.slug === slug);
}
