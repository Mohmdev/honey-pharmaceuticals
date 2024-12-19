import { Banner } from '@blocks/Banner'
import { BlogContent } from '@blocks/BlogContent'
import { BlogMarkdown } from '@blocks/BlogMarkdown'
import { Callout } from '@blocks/Callout'
import { CallToAction } from '@blocks/CallToAction'
import { CardGrid } from '@blocks/CardGrid'
import { CaseStudiesHighlight } from '@blocks/CaseStudiesHighlight'
import { CaseStudyCards } from '@blocks/CaseStudyCards'
import { CaseStudyParallax } from '@blocks/CaseStudyParallax'
import { Code } from '@blocks/Code'
import { CodeFeature } from '@blocks/CodeFeature'
import { Content } from '@blocks/Content'
import { ContentGrid } from '@blocks/ContentGrid'
import { ExampleTabs } from '@blocks/ExampleTabs'
import { Form } from '@blocks/Form'
import { HoverCards } from '@blocks/HoverCards'
import { HoverHighlights } from '@blocks/HoverHighlights'
import { LinkGrid } from '@blocks/LinkGrid'
import { LogoGrid } from '@blocks/LogoGrid'
import { MediaBlock } from '@blocks/Media'
import { MediaContent } from '@blocks/MediaContent'
import { MediaContentAccordion } from '@blocks/MediaContentAccordion'
import { Pricing } from '@blocks/Pricing'
import { Slider } from '@blocks/Slider'
import { Statement } from '@blocks/Statement'
import { Steps } from '@blocks/Steps'
import { StickyHighlights } from '@blocks/StickyHighlights'
import { anyone } from '@access/anyone'
import { isAdminOrEditor } from '@access/isAdminOrEditor'
import { isAdminOrSelf } from '@access/isAdminOrSelf'

import type { CollectionConfig } from 'payload'

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  labels: {
    plural: 'Reusable Contents',
    singular: 'Reusable Content'
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
    readVersions: isAdminOrEditor
  },
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Banner,
        BlogContent,
        BlogMarkdown,
        Callout,
        CallToAction,
        CardGrid,
        CaseStudyCards,
        CaseStudiesHighlight,
        CaseStudyParallax,
        Code,
        CodeFeature,
        Content,
        ContentGrid,
        ExampleTabs,
        Form,
        HoverCards,
        HoverHighlights,
        LinkGrid,
        LogoGrid,
        MediaBlock,
        MediaContent,
        MediaContentAccordion,
        Pricing,
        Slider,
        Statement,
        Steps,
        StickyHighlights
      ],
      required: true
    }
  ]
}