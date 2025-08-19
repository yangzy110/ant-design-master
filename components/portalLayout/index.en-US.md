---
category: Components
group: Layout
title: PortalLayout
description: Provides flexible layout framework with single, double, and triple column layouts for portal applications
---

A flexible layout framework for portal applications, supporting single-column, double-column, and triple-column layout modes.

## When To Use

- When building admin dashboards or portal applications
- When flexible sidebar layouts are needed
- When responsive layout adaptation is required

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic Usage</code>
<code src="./demo/stoneText.tsx">Two Column</code>
<code src="./demo/three-column.tsx">Three Column</code>

## API

### PortalLayout

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| type | Layout type | `single` \| `two-column` \| `three-column` | `single` | - |
| left | Left sidebar content | ReactNode | - | - |
| right | Right sidebar content | ReactNode | - | - |
| children | Main content | ReactNode | - | - |
| className | Container className | string | - | - |
| style | Container style | CSSProperties | - | - |
| leftWidth | Left sidebar width | number \| string | 240 | - |
| rightWidth | Right sidebar width | number \| string | 240 | - |
| divider | Whether to show divider | boolean | true | - |

## Design Guidelines

### Layout Type Selection

- **Single Column**: Suitable for simple content display, such as article reading, form filling, etc.
- **Two Column**: Suitable for applications requiring navigation, such as admin backends, documentation sites, etc.
- **Three Column**: Suitable for information-intensive applications, such as enterprise management systems, data analysis platforms, etc.

### Responsive Design

The component includes built-in responsive design that automatically adjusts to vertical layout on small screen devices, ensuring a good user experience.
