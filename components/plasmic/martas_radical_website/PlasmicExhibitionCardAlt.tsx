// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7kHHtmp7kw7v5e6mQsr6wa
// Component: 2FDyF-_1j4

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { CmsRowImage } from "@plasmicpkgs/plasmic-cms";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_martas_radical_website.module.css"; // plasmic-import: 7kHHtmp7kw7v5e6mQsr6wa/projectcss
import sty from "./PlasmicExhibitionCardAlt.module.css"; // plasmic-import: 2FDyF-_1j4/css

createPlasmicElementProxy;

export type PlasmicExhibitionCardAlt__VariantMembers = {};
export type PlasmicExhibitionCardAlt__VariantsArgs = {};
type VariantPropType = keyof PlasmicExhibitionCardAlt__VariantsArgs;
export const PlasmicExhibitionCardAlt__VariantProps =
  new Array<VariantPropType>();

export type PlasmicExhibitionCardAlt__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicExhibitionCardAlt__ArgsType;
export const PlasmicExhibitionCardAlt__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicExhibitionCardAlt__OverridesType = {
  root?: Flex__<"article">;
  cmsEntryImage?: Flex__<typeof CmsRowImage>;
  img?: Flex__<typeof PlasmicImg__>;
  expoInfo?: Flex__<"div">;
  info?: Flex__<"div">;
  dates?: Flex__<"div">;
  p?: Flex__<"p">;
};

export interface DefaultExhibitionCardAltProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicExhibitionCardAlt__RenderFunc(props: {
  variants: PlasmicExhibitionCardAlt__VariantsArgs;
  args: PlasmicExhibitionCardAlt__ArgsType;
  overrides: PlasmicExhibitionCardAlt__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <article
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <CmsRowImage
        data-plasmic-name={"cmsEntryImage"}
        data-plasmic-override={overrides.cmsEntryImage}
        className={classNames("__wab_instance", sty.cmsEntryImage)}
        srcProp={"src"}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          src={"https://studio.plasmic.app/static/img/placeholder-full.png"}
        />
      </CmsRowImage>
      <div
        data-plasmic-name={"expoInfo"}
        data-plasmic-override={overrides.expoInfo}
        className={classNames(projectcss.all, sty.expoInfo)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__k94A0)}>
          <div className={classNames(projectcss.all, sty.freeBox___2XJdV)}>
            {renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  {(() => {
                    try {
                      return $ctx.plasmicCmsExposCollection[0].data.expoTag;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Writing";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              ),
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </div>
        <CmsRowField
          className={classNames("__wab_instance", sty.cmsEntryField__o43Ye)}
          themeResetClassName={classNames(
            projectcss.root_reset,
            projectcss.root_reset_tags,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens
          )}
        />

        <Stack__
          as={"div"}
          data-plasmic-name={"info"}
          data-plasmic-override={overrides.info}
          hasGap={true}
          className={classNames(projectcss.all, sty.info)}
        >
          <CmsRowField
            className={classNames("__wab_instance", sty.cmsEntryField__xc8O6)}
            dateFormat={"MMM D, YYYY"}
            field={"expoLocal"}
            themeResetClassName={classNames(
              projectcss.root_reset,
              projectcss.root_reset_tags,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens
            )}
          />

          <div
            data-plasmic-name={"dates"}
            data-plasmic-override={overrides.dates}
            className={classNames(projectcss.all, sty.dates)}
          >
            <CmsRowField
              className={classNames(
                "__wab_instance",
                sty.cmsEntryField___8Hb9W
              )}
              dateFormat={"MMM D, YYYY"}
              field={"expoDataStart"}
              themeResetClassName={classNames(
                projectcss.root_reset,
                projectcss.root_reset_tags,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens
              )}
            />

            <p
              data-plasmic-name={"p"}
              data-plasmic-override={overrides.p}
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p
              )}
            >
              {"\u2014"}
            </p>
            <CmsRowField
              className={classNames("__wab_instance", sty.cmsEntryField__oVzdz)}
              dateFormat={"MMM D, YYYY"}
              field={"expoDataEnd"}
              themeResetClassName={classNames(
                projectcss.root_reset,
                projectcss.root_reset_tags,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens
              )}
            />
          </div>
        </Stack__>
        <CmsRowField
          className={classNames("__wab_instance", sty.cmsEntryField__wDwF7)}
          field={"expoExcerto"}
          themeResetClassName={classNames(
            projectcss.root_reset,
            projectcss.root_reset_tags,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens
          )}
        />
      </div>
    </article>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cmsEntryImage", "img", "expoInfo", "info", "dates", "p"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  expoInfo: ["expoInfo", "info", "dates", "p"],
  info: ["info", "dates", "p"],
  dates: ["dates", "p"],
  p: ["p"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "article";
  cmsEntryImage: typeof CmsRowImage;
  img: typeof PlasmicImg__;
  expoInfo: "div";
  info: "div";
  dates: "div";
  p: "p";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicExhibitionCardAlt__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicExhibitionCardAlt__VariantsArgs;
    args?: PlasmicExhibitionCardAlt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicExhibitionCardAlt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicExhibitionCardAlt__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicExhibitionCardAlt__ArgProps,
          internalVariantPropNames: PlasmicExhibitionCardAlt__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicExhibitionCardAlt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExhibitionCardAlt";
  } else {
    func.displayName = `PlasmicExhibitionCardAlt.${nodeName}`;
  }
  return func;
}

export const PlasmicExhibitionCardAlt = Object.assign(
  // Top-level PlasmicExhibitionCardAlt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    expoInfo: makeNodeComponent("expoInfo"),
    info: makeNodeComponent("info"),
    dates: makeNodeComponent("dates"),
    p: makeNodeComponent("p"),

    // Metadata about props expected for PlasmicExhibitionCardAlt
    internalVariantProps: PlasmicExhibitionCardAlt__VariantProps,
    internalArgProps: PlasmicExhibitionCardAlt__ArgProps
  }
);

export default PlasmicExhibitionCardAlt;
/* prettier-ignore-end */
