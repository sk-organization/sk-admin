import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Long: any,
};

export type AdminFranchise = {
   __typename?: 'AdminFranchise',
  id: Scalars['ID'],
  franchise?: Maybe<Franchise>,
  franchises?: Maybe<Array<Franchise>>,
};


export type AdminFranchiseFranchisesArgs = {
  where?: Maybe<FranchiseWhereInput>,
  orderBy?: Maybe<FranchiseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type AdminFranchiseArea = {
   __typename?: 'AdminFranchiseArea',
  id: Scalars['ID'],
  adminFranchise?: Maybe<AdminFranchise>,
  commonName: Scalars['String'],
  franchiseAreas?: Maybe<Array<FranchiseArea>>,
};


export type AdminFranchiseAreaFranchiseAreasArgs = {
  where?: Maybe<FranchiseAreaWhereInput>,
  orderBy?: Maybe<FranchiseAreaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type AdminFranchiseAreaConnection = {
   __typename?: 'AdminFranchiseAreaConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<AdminFranchiseAreaEdge>>,
  aggregate: AggregateAdminFranchiseArea,
};

export type AdminFranchiseAreaCreateInput = {
  id?: Maybe<Scalars['ID']>,
  adminFranchise?: Maybe<AdminFranchiseCreateOneInput>,
  commonName: Scalars['String'],
  franchiseAreas?: Maybe<FranchiseAreaCreateManyWithoutBelongsToInput>,
};

export type AdminFranchiseAreaCreateOneWithoutFranchiseAreasInput = {
  create?: Maybe<AdminFranchiseAreaCreateWithoutFranchiseAreasInput>,
  connect?: Maybe<AdminFranchiseAreaWhereUniqueInput>,
};

export type AdminFranchiseAreaCreateWithoutFranchiseAreasInput = {
  id?: Maybe<Scalars['ID']>,
  adminFranchise?: Maybe<AdminFranchiseCreateOneInput>,
  commonName: Scalars['String'],
};

export type AdminFranchiseAreaEdge = {
   __typename?: 'AdminFranchiseAreaEdge',
  node: AdminFranchiseArea,
  cursor: Scalars['String'],
};

export enum AdminFranchiseAreaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CommonNameAsc = 'commonName_ASC',
  CommonNameDesc = 'commonName_DESC'
}

export type AdminFranchiseAreaUpdateInput = {
  adminFranchise?: Maybe<AdminFranchiseUpdateOneInput>,
  commonName?: Maybe<Scalars['String']>,
  franchiseAreas?: Maybe<FranchiseAreaUpdateManyWithoutBelongsToInput>,
};

export type AdminFranchiseAreaUpdateManyMutationInput = {
  commonName?: Maybe<Scalars['String']>,
};

export type AdminFranchiseAreaUpdateOneRequiredWithoutFranchiseAreasInput = {
  create?: Maybe<AdminFranchiseAreaCreateWithoutFranchiseAreasInput>,
  update?: Maybe<AdminFranchiseAreaUpdateWithoutFranchiseAreasDataInput>,
  upsert?: Maybe<AdminFranchiseAreaUpsertWithoutFranchiseAreasInput>,
  connect?: Maybe<AdminFranchiseAreaWhereUniqueInput>,
};

export type AdminFranchiseAreaUpdateWithoutFranchiseAreasDataInput = {
  adminFranchise?: Maybe<AdminFranchiseUpdateOneInput>,
  commonName?: Maybe<Scalars['String']>,
};

export type AdminFranchiseAreaUpsertWithoutFranchiseAreasInput = {
  update: AdminFranchiseAreaUpdateWithoutFranchiseAreasDataInput,
  create: AdminFranchiseAreaCreateWithoutFranchiseAreasInput,
};

export type AdminFranchiseAreaWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  adminFranchise?: Maybe<AdminFranchiseWhereInput>,
  commonName?: Maybe<Scalars['String']>,
  commonName_not?: Maybe<Scalars['String']>,
  commonName_in?: Maybe<Array<Scalars['String']>>,
  commonName_not_in?: Maybe<Array<Scalars['String']>>,
  commonName_lt?: Maybe<Scalars['String']>,
  commonName_lte?: Maybe<Scalars['String']>,
  commonName_gt?: Maybe<Scalars['String']>,
  commonName_gte?: Maybe<Scalars['String']>,
  commonName_contains?: Maybe<Scalars['String']>,
  commonName_not_contains?: Maybe<Scalars['String']>,
  commonName_starts_with?: Maybe<Scalars['String']>,
  commonName_not_starts_with?: Maybe<Scalars['String']>,
  commonName_ends_with?: Maybe<Scalars['String']>,
  commonName_not_ends_with?: Maybe<Scalars['String']>,
  franchiseAreas_every?: Maybe<FranchiseAreaWhereInput>,
  franchiseAreas_some?: Maybe<FranchiseAreaWhereInput>,
  franchiseAreas_none?: Maybe<FranchiseAreaWhereInput>,
  AND?: Maybe<Array<AdminFranchiseAreaWhereInput>>,
  OR?: Maybe<Array<AdminFranchiseAreaWhereInput>>,
  NOT?: Maybe<Array<AdminFranchiseAreaWhereInput>>,
};

export type AdminFranchiseAreaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type AdminFranchiseConnection = {
   __typename?: 'AdminFranchiseConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<AdminFranchiseEdge>>,
  aggregate: AggregateAdminFranchise,
};

export type AdminFranchiseCreateInput = {
  id?: Maybe<Scalars['ID']>,
  franchise?: Maybe<FranchiseCreateOneInput>,
  franchises?: Maybe<FranchiseCreateManyWithoutAdminFranchiseInput>,
};

export type AdminFranchiseCreateOneInput = {
  create?: Maybe<AdminFranchiseCreateInput>,
  connect?: Maybe<AdminFranchiseWhereUniqueInput>,
};

export type AdminFranchiseCreateOneWithoutFranchisesInput = {
  create?: Maybe<AdminFranchiseCreateWithoutFranchisesInput>,
  connect?: Maybe<AdminFranchiseWhereUniqueInput>,
};

export type AdminFranchiseCreateWithoutFranchisesInput = {
  id?: Maybe<Scalars['ID']>,
  franchise?: Maybe<FranchiseCreateOneInput>,
};

export type AdminFranchiseEdge = {
   __typename?: 'AdminFranchiseEdge',
  node: AdminFranchise,
  cursor: Scalars['String'],
};

export enum AdminFranchiseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AdminFranchiseUpdateDataInput = {
  franchise?: Maybe<FranchiseUpdateOneInput>,
  franchises?: Maybe<FranchiseUpdateManyWithoutAdminFranchiseInput>,
};

export type AdminFranchiseUpdateInput = {
  franchise?: Maybe<FranchiseUpdateOneInput>,
  franchises?: Maybe<FranchiseUpdateManyWithoutAdminFranchiseInput>,
};

export type AdminFranchiseUpdateOneInput = {
  create?: Maybe<AdminFranchiseCreateInput>,
  update?: Maybe<AdminFranchiseUpdateDataInput>,
  upsert?: Maybe<AdminFranchiseUpsertNestedInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<AdminFranchiseWhereUniqueInput>,
};

export type AdminFranchiseUpdateOneWithoutFranchisesInput = {
  create?: Maybe<AdminFranchiseCreateWithoutFranchisesInput>,
  update?: Maybe<AdminFranchiseUpdateWithoutFranchisesDataInput>,
  upsert?: Maybe<AdminFranchiseUpsertWithoutFranchisesInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<AdminFranchiseWhereUniqueInput>,
};

export type AdminFranchiseUpdateWithoutFranchisesDataInput = {
  franchise?: Maybe<FranchiseUpdateOneInput>,
};

export type AdminFranchiseUpsertNestedInput = {
  update: AdminFranchiseUpdateDataInput,
  create: AdminFranchiseCreateInput,
};

export type AdminFranchiseUpsertWithoutFranchisesInput = {
  update: AdminFranchiseUpdateWithoutFranchisesDataInput,
  create: AdminFranchiseCreateWithoutFranchisesInput,
};

export type AdminFranchiseWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  franchise?: Maybe<FranchiseWhereInput>,
  franchises_every?: Maybe<FranchiseWhereInput>,
  franchises_some?: Maybe<FranchiseWhereInput>,
  franchises_none?: Maybe<FranchiseWhereInput>,
  AND?: Maybe<Array<AdminFranchiseWhereInput>>,
  OR?: Maybe<Array<AdminFranchiseWhereInput>>,
  NOT?: Maybe<Array<AdminFranchiseWhereInput>>,
};

export type AdminFranchiseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type AggregateAdminFranchise = {
   __typename?: 'AggregateAdminFranchise',
  count: Scalars['Int'],
};

export type AggregateAdminFranchiseArea = {
   __typename?: 'AggregateAdminFranchiseArea',
  count: Scalars['Int'],
};

export type AggregateCarousel = {
   __typename?: 'AggregateCarousel',
  count: Scalars['Int'],
};

export type AggregateCart = {
   __typename?: 'AggregateCart',
  count: Scalars['Int'],
};

export type AggregateCategory = {
   __typename?: 'AggregateCategory',
  count: Scalars['Int'],
};

export type AggregateComment = {
   __typename?: 'AggregateComment',
  count: Scalars['Int'],
};

export type AggregateFranchise = {
   __typename?: 'AggregateFranchise',
  count: Scalars['Int'],
};

export type AggregateFranchiseArea = {
   __typename?: 'AggregateFranchiseArea',
  count: Scalars['Int'],
};

export type AggregateLatLng = {
   __typename?: 'AggregateLatLng',
  count: Scalars['Int'],
};

export type AggregateLocation = {
   __typename?: 'AggregateLocation',
  count: Scalars['Int'],
};

export type AggregateOrder = {
   __typename?: 'AggregateOrder',
  count: Scalars['Int'],
};

export type AggregatePaymentDetail = {
   __typename?: 'AggregatePaymentDetail',
  count: Scalars['Int'],
};

export type AggregateProduct = {
   __typename?: 'AggregateProduct',
  count: Scalars['Int'],
};

export type AggregateSearch = {
   __typename?: 'AggregateSearch',
  count: Scalars['Int'],
};

export type AggregateSeller = {
   __typename?: 'AggregateSeller',
  count: Scalars['Int'],
};

export type AggregateSize = {
   __typename?: 'AggregateSize',
  count: Scalars['Int'],
};

export type AggregateSubCategory = {
   __typename?: 'AggregateSubCategory',
  count: Scalars['Int'],
};

export type AggregateTag = {
   __typename?: 'AggregateTag',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type AggregateVariation = {
   __typename?: 'AggregateVariation',
  count: Scalars['Int'],
};

export type AggregateViewedProduct = {
   __typename?: 'AggregateViewedProduct',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export type Carousel = {
   __typename?: 'Carousel',
  id: Scalars['ID'],
  image: Scalars['String'],
  show: Scalars['Boolean'],
  index: Scalars['Int'],
  tag: Tag,
};

export type CarouselConnection = {
   __typename?: 'CarouselConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<CarouselEdge>>,
  aggregate: AggregateCarousel,
};

export type CarouselCreateInput = {
  id?: Maybe<Scalars['ID']>,
  image: Scalars['String'],
  show?: Maybe<Scalars['Boolean']>,
  index: Scalars['Int'],
  tag: TagCreateOneInput,
};

export type CarouselEdge = {
   __typename?: 'CarouselEdge',
  node: Carousel,
  cursor: Scalars['String'],
};

export enum CarouselOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  ShowAsc = 'show_ASC',
  ShowDesc = 'show_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC'
}

export type CarouselUpdateInput = {
  image?: Maybe<Scalars['String']>,
  show?: Maybe<Scalars['Boolean']>,
  index?: Maybe<Scalars['Int']>,
  tag?: Maybe<TagUpdateOneRequiredInput>,
};

export type CarouselUpdateManyMutationInput = {
  image?: Maybe<Scalars['String']>,
  show?: Maybe<Scalars['Boolean']>,
  index?: Maybe<Scalars['Int']>,
};

export type CarouselWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  show?: Maybe<Scalars['Boolean']>,
  show_not?: Maybe<Scalars['Boolean']>,
  index?: Maybe<Scalars['Int']>,
  index_not?: Maybe<Scalars['Int']>,
  index_in?: Maybe<Array<Scalars['Int']>>,
  index_not_in?: Maybe<Array<Scalars['Int']>>,
  index_lt?: Maybe<Scalars['Int']>,
  index_lte?: Maybe<Scalars['Int']>,
  index_gt?: Maybe<Scalars['Int']>,
  index_gte?: Maybe<Scalars['Int']>,
  tag?: Maybe<TagWhereInput>,
  AND?: Maybe<Array<CarouselWhereInput>>,
  OR?: Maybe<Array<CarouselWhereInput>>,
  NOT?: Maybe<Array<CarouselWhereInput>>,
};

export type CarouselWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Cart = {
   __typename?: 'Cart',
  id: Scalars['ID'],
  total: Scalars['Int'],
  totalProducts: Scalars['Int'],
  status: CartStatus,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  franchise?: Maybe<Franchise>,
  orderBy: User,
  selectedVariations?: Maybe<Array<Variation>>,
  product: Product,
};


export type CartSelectedVariationsArgs = {
  where?: Maybe<VariationWhereInput>,
  orderBy?: Maybe<VariationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CartConnection = {
   __typename?: 'CartConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<CartEdge>>,
  aggregate: AggregateCart,
};

export type CartCreateInput = {
  id?: Maybe<Scalars['ID']>,
  total: Scalars['Int'],
  totalProducts: Scalars['Int'],
  status?: Maybe<CartStatus>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  franchise?: Maybe<FranchiseCreateOneInput>,
  orderBy: UserCreateOneWithoutCartInput,
  selectedVariations?: Maybe<VariationCreateManyInput>,
  product: ProductCreateOneInput,
};

export type CartCreateManyInput = {
  create?: Maybe<Array<CartCreateInput>>,
  connect?: Maybe<Array<CartWhereUniqueInput>>,
};

export type CartCreateManyWithoutOrderByInput = {
  create?: Maybe<Array<CartCreateWithoutOrderByInput>>,
  connect?: Maybe<Array<CartWhereUniqueInput>>,
};

export type CartCreateWithoutOrderByInput = {
  id?: Maybe<Scalars['ID']>,
  total: Scalars['Int'],
  totalProducts: Scalars['Int'],
  status?: Maybe<CartStatus>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  franchise?: Maybe<FranchiseCreateOneInput>,
  selectedVariations?: Maybe<VariationCreateManyInput>,
  product: ProductCreateOneInput,
};

export type CartEdge = {
   __typename?: 'CartEdge',
  node: Cart,
  cursor: Scalars['String'],
};

export enum CartOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  TotalProductsAsc = 'totalProducts_ASC',
  TotalProductsDesc = 'totalProducts_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  SellerSeenAsc = 'sellerSeen_ASC',
  SellerSeenDesc = 'sellerSeen_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CartScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  total?: Maybe<Scalars['Int']>,
  total_not?: Maybe<Scalars['Int']>,
  total_in?: Maybe<Array<Scalars['Int']>>,
  total_not_in?: Maybe<Array<Scalars['Int']>>,
  total_lt?: Maybe<Scalars['Int']>,
  total_lte?: Maybe<Scalars['Int']>,
  total_gt?: Maybe<Scalars['Int']>,
  total_gte?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  totalProducts_not?: Maybe<Scalars['Int']>,
  totalProducts_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_not_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_lt?: Maybe<Scalars['Int']>,
  totalProducts_lte?: Maybe<Scalars['Int']>,
  totalProducts_gt?: Maybe<Scalars['Int']>,
  totalProducts_gte?: Maybe<Scalars['Int']>,
  status?: Maybe<CartStatus>,
  status_not?: Maybe<CartStatus>,
  status_in?: Maybe<Array<CartStatus>>,
  status_not_in?: Maybe<Array<CartStatus>>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  sellerSeen_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CartScalarWhereInput>>,
  OR?: Maybe<Array<CartScalarWhereInput>>,
  NOT?: Maybe<Array<CartScalarWhereInput>>,
};

export enum CartStatus {
  Cart = 'CART',
  Wishlist = 'WISHLIST',
  Order = 'ORDER'
}

export type CartUpdateDataInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  status?: Maybe<CartStatus>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  franchise?: Maybe<FranchiseUpdateOneInput>,
  orderBy?: Maybe<UserUpdateOneRequiredWithoutCartInput>,
  selectedVariations?: Maybe<VariationUpdateManyInput>,
  product?: Maybe<ProductUpdateOneRequiredInput>,
};

export type CartUpdateInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  status?: Maybe<CartStatus>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  franchise?: Maybe<FranchiseUpdateOneInput>,
  orderBy?: Maybe<UserUpdateOneRequiredWithoutCartInput>,
  selectedVariations?: Maybe<VariationUpdateManyInput>,
  product?: Maybe<ProductUpdateOneRequiredInput>,
};

export type CartUpdateManyDataInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  status?: Maybe<CartStatus>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
};

export type CartUpdateManyInput = {
  create?: Maybe<Array<CartCreateInput>>,
  update?: Maybe<Array<CartUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<CartUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<CartWhereUniqueInput>>,
  connect?: Maybe<Array<CartWhereUniqueInput>>,
  set?: Maybe<Array<CartWhereUniqueInput>>,
  disconnect?: Maybe<Array<CartWhereUniqueInput>>,
  deleteMany?: Maybe<Array<CartScalarWhereInput>>,
  updateMany?: Maybe<Array<CartUpdateManyWithWhereNestedInput>>,
};

export type CartUpdateManyMutationInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  status?: Maybe<CartStatus>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
};

export type CartUpdateManyWithoutOrderByInput = {
  create?: Maybe<Array<CartCreateWithoutOrderByInput>>,
  delete?: Maybe<Array<CartWhereUniqueInput>>,
  connect?: Maybe<Array<CartWhereUniqueInput>>,
  set?: Maybe<Array<CartWhereUniqueInput>>,
  disconnect?: Maybe<Array<CartWhereUniqueInput>>,
  update?: Maybe<Array<CartUpdateWithWhereUniqueWithoutOrderByInput>>,
  upsert?: Maybe<Array<CartUpsertWithWhereUniqueWithoutOrderByInput>>,
  deleteMany?: Maybe<Array<CartScalarWhereInput>>,
  updateMany?: Maybe<Array<CartUpdateManyWithWhereNestedInput>>,
};

export type CartUpdateManyWithWhereNestedInput = {
  where: CartScalarWhereInput,
  data: CartUpdateManyDataInput,
};

export type CartUpdateWithoutOrderByDataInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  status?: Maybe<CartStatus>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  franchise?: Maybe<FranchiseUpdateOneInput>,
  selectedVariations?: Maybe<VariationUpdateManyInput>,
  product?: Maybe<ProductUpdateOneRequiredInput>,
};

export type CartUpdateWithWhereUniqueNestedInput = {
  where: CartWhereUniqueInput,
  data: CartUpdateDataInput,
};

export type CartUpdateWithWhereUniqueWithoutOrderByInput = {
  where: CartWhereUniqueInput,
  data: CartUpdateWithoutOrderByDataInput,
};

export type CartUpsertWithWhereUniqueNestedInput = {
  where: CartWhereUniqueInput,
  update: CartUpdateDataInput,
  create: CartCreateInput,
};

export type CartUpsertWithWhereUniqueWithoutOrderByInput = {
  where: CartWhereUniqueInput,
  update: CartUpdateWithoutOrderByDataInput,
  create: CartCreateWithoutOrderByInput,
};

export type CartWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  total?: Maybe<Scalars['Int']>,
  total_not?: Maybe<Scalars['Int']>,
  total_in?: Maybe<Array<Scalars['Int']>>,
  total_not_in?: Maybe<Array<Scalars['Int']>>,
  total_lt?: Maybe<Scalars['Int']>,
  total_lte?: Maybe<Scalars['Int']>,
  total_gt?: Maybe<Scalars['Int']>,
  total_gte?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  totalProducts_not?: Maybe<Scalars['Int']>,
  totalProducts_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_not_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_lt?: Maybe<Scalars['Int']>,
  totalProducts_lte?: Maybe<Scalars['Int']>,
  totalProducts_gt?: Maybe<Scalars['Int']>,
  totalProducts_gte?: Maybe<Scalars['Int']>,
  status?: Maybe<CartStatus>,
  status_not?: Maybe<CartStatus>,
  status_in?: Maybe<Array<CartStatus>>,
  status_not_in?: Maybe<Array<CartStatus>>,
  sellerSeen?: Maybe<Scalars['Boolean']>,
  sellerSeen_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  franchise?: Maybe<FranchiseWhereInput>,
  orderBy?: Maybe<UserWhereInput>,
  selectedVariations_every?: Maybe<VariationWhereInput>,
  selectedVariations_some?: Maybe<VariationWhereInput>,
  selectedVariations_none?: Maybe<VariationWhereInput>,
  product?: Maybe<ProductWhereInput>,
  AND?: Maybe<Array<CartWhereInput>>,
  OR?: Maybe<Array<CartWhereInput>>,
  NOT?: Maybe<Array<CartWhereInput>>,
};

export type CartWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Category = {
   __typename?: 'Category',
  id: Scalars['ID'],
  name: Scalars['String'],
  image: Scalars['String'],
  totalProducts: Scalars['Int'],
};

export type CategoryConnection = {
   __typename?: 'CategoryConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<CategoryEdge>>,
  aggregate: AggregateCategory,
};

export type CategoryCreateInput = {
  id?: Maybe<Scalars['ID']>,
  image: Scalars['String'],
  name: Scalars['String'],
};

export type CategoryCreateOneInput = {
  create?: Maybe<CategoryCreateInput>,
  connect?: Maybe<CategoryWhereUniqueInput>,
};

export type CategoryEdge = {
   __typename?: 'CategoryEdge',
  node: Category,
  cursor: Scalars['String'],
};

export enum CategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type CategoryUpdateDataInput = {
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type CategoryUpdateInput = {
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type CategoryUpdateManyMutationInput = {
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type CategoryUpdateOneRequiredInput = {
  create?: Maybe<CategoryCreateInput>,
  update?: Maybe<CategoryUpdateDataInput>,
  upsert?: Maybe<CategoryUpsertNestedInput>,
  connect?: Maybe<CategoryWhereUniqueInput>,
};

export type CategoryUpsertNestedInput = {
  update: CategoryUpdateDataInput,
  create: CategoryCreateInput,
};

export type CategoryWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<CategoryWhereInput>>,
  OR?: Maybe<Array<CategoryWhereInput>>,
  NOT?: Maybe<Array<CategoryWhereInput>>,
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type Comment = {
   __typename?: 'Comment',
  id: Scalars['ID'],
  rating?: Maybe<Scalars['Int']>,
  likes?: Maybe<Scalars['Int']>,
  body?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  user: User,
  product: Product,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  images: Array<Scalars['String']>,
};

export type CommentConnection = {
   __typename?: 'CommentConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<CommentEdge>>,
  aggregate: AggregateComment,
};

export type CommentCreateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type CommentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  rating?: Maybe<Scalars['Int']>,
  likes?: Maybe<Scalars['Int']>,
  body?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  user: UserCreateOneInput,
  product: ProductCreateOneInput,
  images?: Maybe<CommentCreateimagesInput>,
};

export type CommentEdge = {
   __typename?: 'CommentEdge',
  node: Comment,
  cursor: Scalars['String'],
};

export enum CommentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  LikesAsc = 'likes_ASC',
  LikesDesc = 'likes_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CommentUpdateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type CommentUpdateInput = {
  rating?: Maybe<Scalars['Int']>,
  likes?: Maybe<Scalars['Int']>,
  body?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  product?: Maybe<ProductUpdateOneRequiredInput>,
  images?: Maybe<CommentUpdateimagesInput>,
};

export type CommentUpdateManyMutationInput = {
  rating?: Maybe<Scalars['Int']>,
  likes?: Maybe<Scalars['Int']>,
  body?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  images?: Maybe<CommentUpdateimagesInput>,
};

export type CommentWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  rating?: Maybe<Scalars['Int']>,
  rating_not?: Maybe<Scalars['Int']>,
  rating_in?: Maybe<Array<Scalars['Int']>>,
  rating_not_in?: Maybe<Array<Scalars['Int']>>,
  rating_lt?: Maybe<Scalars['Int']>,
  rating_lte?: Maybe<Scalars['Int']>,
  rating_gt?: Maybe<Scalars['Int']>,
  rating_gte?: Maybe<Scalars['Int']>,
  likes?: Maybe<Scalars['Int']>,
  likes_not?: Maybe<Scalars['Int']>,
  likes_in?: Maybe<Array<Scalars['Int']>>,
  likes_not_in?: Maybe<Array<Scalars['Int']>>,
  likes_lt?: Maybe<Scalars['Int']>,
  likes_lte?: Maybe<Scalars['Int']>,
  likes_gt?: Maybe<Scalars['Int']>,
  likes_gte?: Maybe<Scalars['Int']>,
  body?: Maybe<Scalars['String']>,
  body_not?: Maybe<Scalars['String']>,
  body_in?: Maybe<Array<Scalars['String']>>,
  body_not_in?: Maybe<Array<Scalars['String']>>,
  body_lt?: Maybe<Scalars['String']>,
  body_lte?: Maybe<Scalars['String']>,
  body_gt?: Maybe<Scalars['String']>,
  body_gte?: Maybe<Scalars['String']>,
  body_contains?: Maybe<Scalars['String']>,
  body_not_contains?: Maybe<Scalars['String']>,
  body_starts_with?: Maybe<Scalars['String']>,
  body_not_starts_with?: Maybe<Scalars['String']>,
  body_ends_with?: Maybe<Scalars['String']>,
  body_not_ends_with?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  user?: Maybe<UserWhereInput>,
  product?: Maybe<ProductWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CommentWhereInput>>,
  OR?: Maybe<Array<CommentWhereInput>>,
  NOT?: Maybe<Array<CommentWhereInput>>,
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export enum Duration {
  Within_24Hours = 'WITHIN_24_HOURS',
  Within_2Days = 'WITHIN_2_DAYS',
  Within_3Days = 'WITHIN_3_DAYS',
  Within_4Days = 'WITHIN_4_DAYS',
  Within_5Days = 'WITHIN_5_DAYS',
  Within_6Days = 'WITHIN_6_DAYS',
  Within_7Days = 'WITHIN_7_DAYS',
  MoreThan_7Days = 'MORE_THAN_7_DAYS'
}

export enum FamilyMembers {
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
  Five = 'FIVE',
  Six = 'SIX',
  MoreThanSix = 'MORE_THAN_SIX'
}

export type Franchise = {
   __typename?: 'Franchise',
  id: Scalars['ID'],
  dob: Scalars['DateTime'],
  isMarried: Scalars['Boolean'],
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education: Scalars['String'],
  workExperience?: Maybe<WorkExperience>,
  expectedSalary: Salary,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  adminFranchise: AdminFranchise,
  user: User,
  bankDetails?: Maybe<PaymentDetail>,
  area: Array<LatLng>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type FranchiseArea = {
   __typename?: 'FranchiseArea',
  id: Scalars['ID'],
  franchise?: Maybe<Franchise>,
  belongsTo: AdminFranchiseArea,
  commonName: Scalars['String'],
};

export type FranchiseAreaConnection = {
   __typename?: 'FranchiseAreaConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<FranchiseAreaEdge>>,
  aggregate: AggregateFranchiseArea,
};

export type FranchiseAreaCreateInput = {
  id?: Maybe<Scalars['ID']>,
  franchise?: Maybe<FranchiseCreateOneInput>,
  belongsTo: AdminFranchiseAreaCreateOneWithoutFranchiseAreasInput,
  commonName: Scalars['String'],
};

export type FranchiseAreaCreateManyWithoutBelongsToInput = {
  create?: Maybe<Array<FranchiseAreaCreateWithoutBelongsToInput>>,
  connect?: Maybe<Array<FranchiseAreaWhereUniqueInput>>,
};

export type FranchiseAreaCreateWithoutBelongsToInput = {
  id?: Maybe<Scalars['ID']>,
  franchise?: Maybe<FranchiseCreateOneInput>,
  commonName: Scalars['String'],
};

export type FranchiseAreaEdge = {
   __typename?: 'FranchiseAreaEdge',
  node: FranchiseArea,
  cursor: Scalars['String'],
};

export enum FranchiseAreaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CommonNameAsc = 'commonName_ASC',
  CommonNameDesc = 'commonName_DESC'
}

export type FranchiseAreaScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  commonName?: Maybe<Scalars['String']>,
  commonName_not?: Maybe<Scalars['String']>,
  commonName_in?: Maybe<Array<Scalars['String']>>,
  commonName_not_in?: Maybe<Array<Scalars['String']>>,
  commonName_lt?: Maybe<Scalars['String']>,
  commonName_lte?: Maybe<Scalars['String']>,
  commonName_gt?: Maybe<Scalars['String']>,
  commonName_gte?: Maybe<Scalars['String']>,
  commonName_contains?: Maybe<Scalars['String']>,
  commonName_not_contains?: Maybe<Scalars['String']>,
  commonName_starts_with?: Maybe<Scalars['String']>,
  commonName_not_starts_with?: Maybe<Scalars['String']>,
  commonName_ends_with?: Maybe<Scalars['String']>,
  commonName_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<FranchiseAreaScalarWhereInput>>,
  OR?: Maybe<Array<FranchiseAreaScalarWhereInput>>,
  NOT?: Maybe<Array<FranchiseAreaScalarWhereInput>>,
};

export type FranchiseAreaUpdateInput = {
  franchise?: Maybe<FranchiseUpdateOneInput>,
  belongsTo?: Maybe<AdminFranchiseAreaUpdateOneRequiredWithoutFranchiseAreasInput>,
  commonName?: Maybe<Scalars['String']>,
};

export type FranchiseAreaUpdateManyDataInput = {
  commonName?: Maybe<Scalars['String']>,
};

export type FranchiseAreaUpdateManyMutationInput = {
  commonName?: Maybe<Scalars['String']>,
};

export type FranchiseAreaUpdateManyWithoutBelongsToInput = {
  create?: Maybe<Array<FranchiseAreaCreateWithoutBelongsToInput>>,
  delete?: Maybe<Array<FranchiseAreaWhereUniqueInput>>,
  connect?: Maybe<Array<FranchiseAreaWhereUniqueInput>>,
  set?: Maybe<Array<FranchiseAreaWhereUniqueInput>>,
  disconnect?: Maybe<Array<FranchiseAreaWhereUniqueInput>>,
  update?: Maybe<Array<FranchiseAreaUpdateWithWhereUniqueWithoutBelongsToInput>>,
  upsert?: Maybe<Array<FranchiseAreaUpsertWithWhereUniqueWithoutBelongsToInput>>,
  deleteMany?: Maybe<Array<FranchiseAreaScalarWhereInput>>,
  updateMany?: Maybe<Array<FranchiseAreaUpdateManyWithWhereNestedInput>>,
};

export type FranchiseAreaUpdateManyWithWhereNestedInput = {
  where: FranchiseAreaScalarWhereInput,
  data: FranchiseAreaUpdateManyDataInput,
};

export type FranchiseAreaUpdateWithoutBelongsToDataInput = {
  franchise?: Maybe<FranchiseUpdateOneInput>,
  commonName?: Maybe<Scalars['String']>,
};

export type FranchiseAreaUpdateWithWhereUniqueWithoutBelongsToInput = {
  where: FranchiseAreaWhereUniqueInput,
  data: FranchiseAreaUpdateWithoutBelongsToDataInput,
};

export type FranchiseAreaUpsertWithWhereUniqueWithoutBelongsToInput = {
  where: FranchiseAreaWhereUniqueInput,
  update: FranchiseAreaUpdateWithoutBelongsToDataInput,
  create: FranchiseAreaCreateWithoutBelongsToInput,
};

export type FranchiseAreaWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  franchise?: Maybe<FranchiseWhereInput>,
  belongsTo?: Maybe<AdminFranchiseAreaWhereInput>,
  commonName?: Maybe<Scalars['String']>,
  commonName_not?: Maybe<Scalars['String']>,
  commonName_in?: Maybe<Array<Scalars['String']>>,
  commonName_not_in?: Maybe<Array<Scalars['String']>>,
  commonName_lt?: Maybe<Scalars['String']>,
  commonName_lte?: Maybe<Scalars['String']>,
  commonName_gt?: Maybe<Scalars['String']>,
  commonName_gte?: Maybe<Scalars['String']>,
  commonName_contains?: Maybe<Scalars['String']>,
  commonName_not_contains?: Maybe<Scalars['String']>,
  commonName_starts_with?: Maybe<Scalars['String']>,
  commonName_not_starts_with?: Maybe<Scalars['String']>,
  commonName_ends_with?: Maybe<Scalars['String']>,
  commonName_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<FranchiseAreaWhereInput>>,
  OR?: Maybe<Array<FranchiseAreaWhereInput>>,
  NOT?: Maybe<Array<FranchiseAreaWhereInput>>,
};

export type FranchiseAreaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type FranchiseConnection = {
   __typename?: 'FranchiseConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<FranchiseEdge>>,
  aggregate: AggregateFranchise,
};

export type FranchiseCreateInput = {
  id?: Maybe<Scalars['ID']>,
  dob: Scalars['DateTime'],
  isMarried: Scalars['Boolean'],
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education: Scalars['String'],
  workExperience?: Maybe<WorkExperience>,
  expectedSalary: Salary,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  adminFranchise?: Maybe<AdminFranchiseCreateOneWithoutFranchisesInput>,
  user: UserCreateOneInput,
  bankDetails?: Maybe<PaymentDetailCreateOneInput>,
};

export type FranchiseCreateManyWithoutAdminFranchiseInput = {
  create?: Maybe<Array<FranchiseCreateWithoutAdminFranchiseInput>>,
  connect?: Maybe<Array<FranchiseWhereUniqueInput>>,
};

export type FranchiseCreateOneInput = {
  create?: Maybe<FranchiseCreateInput>,
  connect?: Maybe<FranchiseWhereUniqueInput>,
};

export type FranchiseCreateWithoutAdminFranchiseInput = {
  id?: Maybe<Scalars['ID']>,
  dob: Scalars['DateTime'],
  isMarried: Scalars['Boolean'],
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education: Scalars['String'],
  workExperience?: Maybe<WorkExperience>,
  expectedSalary: Salary,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  user: UserCreateOneInput,
  bankDetails?: Maybe<PaymentDetailCreateOneInput>,
};

export type FranchiseEdge = {
   __typename?: 'FranchiseEdge',
  node: Franchise,
  cursor: Scalars['String'],
};

export enum FranchiseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DobAsc = 'dob_ASC',
  DobDesc = 'dob_DESC',
  IsMarriedAsc = 'isMarried_ASC',
  IsMarriedDesc = 'isMarried_DESC',
  NoOfChildrenAsc = 'noOfChildren_ASC',
  NoOfChildrenDesc = 'noOfChildren_DESC',
  MarriedDateAsc = 'marriedDate_ASC',
  MarriedDateDesc = 'marriedDate_DESC',
  HusbandWorkingAsc = 'husbandWorking_ASC',
  HusbandWorkingDesc = 'husbandWorking_DESC',
  FamilyMembersAsc = 'familyMembers_ASC',
  FamilyMembersDesc = 'familyMembers_DESC',
  EducationAsc = 'education_ASC',
  EducationDesc = 'education_DESC',
  WorkExperienceAsc = 'workExperience_ASC',
  WorkExperienceDesc = 'workExperience_DESC',
  ExpectedSalaryAsc = 'expectedSalary_ASC',
  ExpectedSalaryDesc = 'expectedSalary_DESC',
  CurrentJobAsc = 'currentJob_ASC',
  CurrentJobDesc = 'currentJob_DESC',
  CurrentSalaryAsc = 'currentSalary_ASC',
  CurrentSalaryDesc = 'currentSalary_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FranchiseScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  dob?: Maybe<Scalars['DateTime']>,
  dob_not?: Maybe<Scalars['DateTime']>,
  dob_in?: Maybe<Array<Scalars['DateTime']>>,
  dob_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dob_lt?: Maybe<Scalars['DateTime']>,
  dob_lte?: Maybe<Scalars['DateTime']>,
  dob_gt?: Maybe<Scalars['DateTime']>,
  dob_gte?: Maybe<Scalars['DateTime']>,
  isMarried?: Maybe<Scalars['Boolean']>,
  isMarried_not?: Maybe<Scalars['Boolean']>,
  noOfChildren?: Maybe<NoOfChildrens>,
  noOfChildren_not?: Maybe<NoOfChildrens>,
  noOfChildren_in?: Maybe<Array<NoOfChildrens>>,
  noOfChildren_not_in?: Maybe<Array<NoOfChildrens>>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  marriedDate_not?: Maybe<Scalars['DateTime']>,
  marriedDate_in?: Maybe<Array<Scalars['DateTime']>>,
  marriedDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  marriedDate_lt?: Maybe<Scalars['DateTime']>,
  marriedDate_lte?: Maybe<Scalars['DateTime']>,
  marriedDate_gt?: Maybe<Scalars['DateTime']>,
  marriedDate_gte?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  husbandWorking_not?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  familyMembers_not?: Maybe<FamilyMembers>,
  familyMembers_in?: Maybe<Array<FamilyMembers>>,
  familyMembers_not_in?: Maybe<Array<FamilyMembers>>,
  education?: Maybe<Scalars['String']>,
  education_not?: Maybe<Scalars['String']>,
  education_in?: Maybe<Array<Scalars['String']>>,
  education_not_in?: Maybe<Array<Scalars['String']>>,
  education_lt?: Maybe<Scalars['String']>,
  education_lte?: Maybe<Scalars['String']>,
  education_gt?: Maybe<Scalars['String']>,
  education_gte?: Maybe<Scalars['String']>,
  education_contains?: Maybe<Scalars['String']>,
  education_not_contains?: Maybe<Scalars['String']>,
  education_starts_with?: Maybe<Scalars['String']>,
  education_not_starts_with?: Maybe<Scalars['String']>,
  education_ends_with?: Maybe<Scalars['String']>,
  education_not_ends_with?: Maybe<Scalars['String']>,
  workExperience?: Maybe<WorkExperience>,
  workExperience_not?: Maybe<WorkExperience>,
  workExperience_in?: Maybe<Array<WorkExperience>>,
  workExperience_not_in?: Maybe<Array<WorkExperience>>,
  expectedSalary?: Maybe<Salary>,
  expectedSalary_not?: Maybe<Salary>,
  expectedSalary_in?: Maybe<Array<Salary>>,
  expectedSalary_not_in?: Maybe<Array<Salary>>,
  currentJob?: Maybe<Scalars['String']>,
  currentJob_not?: Maybe<Scalars['String']>,
  currentJob_in?: Maybe<Array<Scalars['String']>>,
  currentJob_not_in?: Maybe<Array<Scalars['String']>>,
  currentJob_lt?: Maybe<Scalars['String']>,
  currentJob_lte?: Maybe<Scalars['String']>,
  currentJob_gt?: Maybe<Scalars['String']>,
  currentJob_gte?: Maybe<Scalars['String']>,
  currentJob_contains?: Maybe<Scalars['String']>,
  currentJob_not_contains?: Maybe<Scalars['String']>,
  currentJob_starts_with?: Maybe<Scalars['String']>,
  currentJob_not_starts_with?: Maybe<Scalars['String']>,
  currentJob_ends_with?: Maybe<Scalars['String']>,
  currentJob_not_ends_with?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  currentSalary_not?: Maybe<Salary>,
  currentSalary_in?: Maybe<Array<Salary>>,
  currentSalary_not_in?: Maybe<Array<Salary>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<FranchiseScalarWhereInput>>,
  OR?: Maybe<Array<FranchiseScalarWhereInput>>,
  NOT?: Maybe<Array<FranchiseScalarWhereInput>>,
};

export type FranchiseUpdateDataInput = {
  dob?: Maybe<Scalars['DateTime']>,
  isMarried?: Maybe<Scalars['Boolean']>,
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education?: Maybe<Scalars['String']>,
  workExperience?: Maybe<WorkExperience>,
  expectedSalary?: Maybe<Salary>,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  adminFranchise?: Maybe<AdminFranchiseUpdateOneWithoutFranchisesInput>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  bankDetails?: Maybe<PaymentDetailUpdateOneInput>,
};

export type FranchiseUpdateInput = {
  dob?: Maybe<Scalars['DateTime']>,
  isMarried?: Maybe<Scalars['Boolean']>,
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education?: Maybe<Scalars['String']>,
  workExperience?: Maybe<WorkExperience>,
  expectedSalary?: Maybe<Salary>,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  adminFranchise?: Maybe<AdminFranchiseUpdateOneWithoutFranchisesInput>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  bankDetails?: Maybe<PaymentDetailUpdateOneInput>,
};

export type FranchiseUpdateManyDataInput = {
  dob?: Maybe<Scalars['DateTime']>,
  isMarried?: Maybe<Scalars['Boolean']>,
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education?: Maybe<Scalars['String']>,
  workExperience?: Maybe<WorkExperience>,
  expectedSalary?: Maybe<Salary>,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
};

export type FranchiseUpdateManyMutationInput = {
  dob?: Maybe<Scalars['DateTime']>,
  isMarried?: Maybe<Scalars['Boolean']>,
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education?: Maybe<Scalars['String']>,
  workExperience?: Maybe<WorkExperience>,
  expectedSalary?: Maybe<Salary>,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
};

export type FranchiseUpdateManyWithoutAdminFranchiseInput = {
  create?: Maybe<Array<FranchiseCreateWithoutAdminFranchiseInput>>,
  delete?: Maybe<Array<FranchiseWhereUniqueInput>>,
  connect?: Maybe<Array<FranchiseWhereUniqueInput>>,
  set?: Maybe<Array<FranchiseWhereUniqueInput>>,
  disconnect?: Maybe<Array<FranchiseWhereUniqueInput>>,
  update?: Maybe<Array<FranchiseUpdateWithWhereUniqueWithoutAdminFranchiseInput>>,
  upsert?: Maybe<Array<FranchiseUpsertWithWhereUniqueWithoutAdminFranchiseInput>>,
  deleteMany?: Maybe<Array<FranchiseScalarWhereInput>>,
  updateMany?: Maybe<Array<FranchiseUpdateManyWithWhereNestedInput>>,
};

export type FranchiseUpdateManyWithWhereNestedInput = {
  where: FranchiseScalarWhereInput,
  data: FranchiseUpdateManyDataInput,
};

export type FranchiseUpdateOneInput = {
  create?: Maybe<FranchiseCreateInput>,
  update?: Maybe<FranchiseUpdateDataInput>,
  upsert?: Maybe<FranchiseUpsertNestedInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<FranchiseWhereUniqueInput>,
};

export type FranchiseUpdateWithoutAdminFranchiseDataInput = {
  dob?: Maybe<Scalars['DateTime']>,
  isMarried?: Maybe<Scalars['Boolean']>,
  noOfChildren?: Maybe<NoOfChildrens>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  education?: Maybe<Scalars['String']>,
  workExperience?: Maybe<WorkExperience>,
  expectedSalary?: Maybe<Salary>,
  currentJob?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  bankDetails?: Maybe<PaymentDetailUpdateOneInput>,
};

export type FranchiseUpdateWithWhereUniqueWithoutAdminFranchiseInput = {
  where: FranchiseWhereUniqueInput,
  data: FranchiseUpdateWithoutAdminFranchiseDataInput,
};

export type FranchiseUpsertNestedInput = {
  update: FranchiseUpdateDataInput,
  create: FranchiseCreateInput,
};

export type FranchiseUpsertWithWhereUniqueWithoutAdminFranchiseInput = {
  where: FranchiseWhereUniqueInput,
  update: FranchiseUpdateWithoutAdminFranchiseDataInput,
  create: FranchiseCreateWithoutAdminFranchiseInput,
};

export type FranchiseWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  dob?: Maybe<Scalars['DateTime']>,
  dob_not?: Maybe<Scalars['DateTime']>,
  dob_in?: Maybe<Array<Scalars['DateTime']>>,
  dob_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dob_lt?: Maybe<Scalars['DateTime']>,
  dob_lte?: Maybe<Scalars['DateTime']>,
  dob_gt?: Maybe<Scalars['DateTime']>,
  dob_gte?: Maybe<Scalars['DateTime']>,
  isMarried?: Maybe<Scalars['Boolean']>,
  isMarried_not?: Maybe<Scalars['Boolean']>,
  noOfChildren?: Maybe<NoOfChildrens>,
  noOfChildren_not?: Maybe<NoOfChildrens>,
  noOfChildren_in?: Maybe<Array<NoOfChildrens>>,
  noOfChildren_not_in?: Maybe<Array<NoOfChildrens>>,
  marriedDate?: Maybe<Scalars['DateTime']>,
  marriedDate_not?: Maybe<Scalars['DateTime']>,
  marriedDate_in?: Maybe<Array<Scalars['DateTime']>>,
  marriedDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  marriedDate_lt?: Maybe<Scalars['DateTime']>,
  marriedDate_lte?: Maybe<Scalars['DateTime']>,
  marriedDate_gt?: Maybe<Scalars['DateTime']>,
  marriedDate_gte?: Maybe<Scalars['DateTime']>,
  husbandWorking?: Maybe<Scalars['Boolean']>,
  husbandWorking_not?: Maybe<Scalars['Boolean']>,
  familyMembers?: Maybe<FamilyMembers>,
  familyMembers_not?: Maybe<FamilyMembers>,
  familyMembers_in?: Maybe<Array<FamilyMembers>>,
  familyMembers_not_in?: Maybe<Array<FamilyMembers>>,
  education?: Maybe<Scalars['String']>,
  education_not?: Maybe<Scalars['String']>,
  education_in?: Maybe<Array<Scalars['String']>>,
  education_not_in?: Maybe<Array<Scalars['String']>>,
  education_lt?: Maybe<Scalars['String']>,
  education_lte?: Maybe<Scalars['String']>,
  education_gt?: Maybe<Scalars['String']>,
  education_gte?: Maybe<Scalars['String']>,
  education_contains?: Maybe<Scalars['String']>,
  education_not_contains?: Maybe<Scalars['String']>,
  education_starts_with?: Maybe<Scalars['String']>,
  education_not_starts_with?: Maybe<Scalars['String']>,
  education_ends_with?: Maybe<Scalars['String']>,
  education_not_ends_with?: Maybe<Scalars['String']>,
  workExperience?: Maybe<WorkExperience>,
  workExperience_not?: Maybe<WorkExperience>,
  workExperience_in?: Maybe<Array<WorkExperience>>,
  workExperience_not_in?: Maybe<Array<WorkExperience>>,
  expectedSalary?: Maybe<Salary>,
  expectedSalary_not?: Maybe<Salary>,
  expectedSalary_in?: Maybe<Array<Salary>>,
  expectedSalary_not_in?: Maybe<Array<Salary>>,
  currentJob?: Maybe<Scalars['String']>,
  currentJob_not?: Maybe<Scalars['String']>,
  currentJob_in?: Maybe<Array<Scalars['String']>>,
  currentJob_not_in?: Maybe<Array<Scalars['String']>>,
  currentJob_lt?: Maybe<Scalars['String']>,
  currentJob_lte?: Maybe<Scalars['String']>,
  currentJob_gt?: Maybe<Scalars['String']>,
  currentJob_gte?: Maybe<Scalars['String']>,
  currentJob_contains?: Maybe<Scalars['String']>,
  currentJob_not_contains?: Maybe<Scalars['String']>,
  currentJob_starts_with?: Maybe<Scalars['String']>,
  currentJob_not_starts_with?: Maybe<Scalars['String']>,
  currentJob_ends_with?: Maybe<Scalars['String']>,
  currentJob_not_ends_with?: Maybe<Scalars['String']>,
  currentSalary?: Maybe<Salary>,
  currentSalary_not?: Maybe<Salary>,
  currentSalary_in?: Maybe<Array<Salary>>,
  currentSalary_not_in?: Maybe<Array<Salary>>,
  adminFranchise?: Maybe<AdminFranchiseWhereInput>,
  user?: Maybe<UserWhereInput>,
  bankDetails?: Maybe<PaymentDetailWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<FranchiseWhereInput>>,
  OR?: Maybe<Array<FranchiseWhereInput>>,
  NOT?: Maybe<Array<FranchiseWhereInput>>,
};

export type FranchiseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE'
}

export type LatLng = {
   __typename?: 'LatLng',
  latitude: Scalars['String'],
  longitude: Scalars['String'],
};

export type LatLngConnection = {
   __typename?: 'LatLngConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<LatLngEdge>>,
  aggregate: AggregateLatLng,
};

export type LatLngCreateInput = {
  latitude: Scalars['String'],
  longitude: Scalars['String'],
};

export type LatLngEdge = {
   __typename?: 'LatLngEdge',
  node: LatLng,
  cursor: Scalars['String'],
};

export enum LatLngOrderByInput {
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC'
}

export type LatLngUpdateManyMutationInput = {
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type LatLngWhereInput = {
  latitude?: Maybe<Scalars['String']>,
  latitude_not?: Maybe<Scalars['String']>,
  latitude_in?: Maybe<Array<Scalars['String']>>,
  latitude_not_in?: Maybe<Array<Scalars['String']>>,
  latitude_lt?: Maybe<Scalars['String']>,
  latitude_lte?: Maybe<Scalars['String']>,
  latitude_gt?: Maybe<Scalars['String']>,
  latitude_gte?: Maybe<Scalars['String']>,
  latitude_contains?: Maybe<Scalars['String']>,
  latitude_not_contains?: Maybe<Scalars['String']>,
  latitude_starts_with?: Maybe<Scalars['String']>,
  latitude_not_starts_with?: Maybe<Scalars['String']>,
  latitude_ends_with?: Maybe<Scalars['String']>,
  latitude_not_ends_with?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
  longitude_not?: Maybe<Scalars['String']>,
  longitude_in?: Maybe<Array<Scalars['String']>>,
  longitude_not_in?: Maybe<Array<Scalars['String']>>,
  longitude_lt?: Maybe<Scalars['String']>,
  longitude_lte?: Maybe<Scalars['String']>,
  longitude_gt?: Maybe<Scalars['String']>,
  longitude_gte?: Maybe<Scalars['String']>,
  longitude_contains?: Maybe<Scalars['String']>,
  longitude_not_contains?: Maybe<Scalars['String']>,
  longitude_starts_with?: Maybe<Scalars['String']>,
  longitude_not_starts_with?: Maybe<Scalars['String']>,
  longitude_ends_with?: Maybe<Scalars['String']>,
  longitude_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<LatLngWhereInput>>,
  OR?: Maybe<Array<LatLngWhereInput>>,
  NOT?: Maybe<Array<LatLngWhereInput>>,
};

export type Location = {
   __typename?: 'Location',
  id: Scalars['ID'],
  city?: Maybe<Scalars['String']>,
  zipCode?: Maybe<Scalars['String']>,
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type LocationConnection = {
   __typename?: 'LocationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<LocationEdge>>,
  aggregate: AggregateLocation,
};

export type LocationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  city?: Maybe<Scalars['String']>,
  zipCode?: Maybe<Scalars['String']>,
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type LocationCreateOneInput = {
  create?: Maybe<LocationCreateInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationEdge = {
   __typename?: 'LocationEdge',
  node: Location,
  cursor: Scalars['String'],
};

export enum LocationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ZipCodeAsc = 'zipCode_ASC',
  ZipCodeDesc = 'zipCode_DESC',
  Address1Asc = 'address1_ASC',
  Address1Desc = 'address1_DESC',
  Address2Asc = 'address2_ASC',
  Address2Desc = 'address2_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LocationUpdateDataInput = {
  city?: Maybe<Scalars['String']>,
  zipCode?: Maybe<Scalars['String']>,
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type LocationUpdateInput = {
  city?: Maybe<Scalars['String']>,
  zipCode?: Maybe<Scalars['String']>,
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type LocationUpdateManyMutationInput = {
  city?: Maybe<Scalars['String']>,
  zipCode?: Maybe<Scalars['String']>,
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type LocationUpdateOneInput = {
  create?: Maybe<LocationCreateInput>,
  update?: Maybe<LocationUpdateDataInput>,
  upsert?: Maybe<LocationUpsertNestedInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationUpdateOneRequiredInput = {
  create?: Maybe<LocationCreateInput>,
  update?: Maybe<LocationUpdateDataInput>,
  upsert?: Maybe<LocationUpsertNestedInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationUpsertNestedInput = {
  update: LocationUpdateDataInput,
  create: LocationCreateInput,
};

export type LocationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  city?: Maybe<Scalars['String']>,
  city_not?: Maybe<Scalars['String']>,
  city_in?: Maybe<Array<Scalars['String']>>,
  city_not_in?: Maybe<Array<Scalars['String']>>,
  city_lt?: Maybe<Scalars['String']>,
  city_lte?: Maybe<Scalars['String']>,
  city_gt?: Maybe<Scalars['String']>,
  city_gte?: Maybe<Scalars['String']>,
  city_contains?: Maybe<Scalars['String']>,
  city_not_contains?: Maybe<Scalars['String']>,
  city_starts_with?: Maybe<Scalars['String']>,
  city_not_starts_with?: Maybe<Scalars['String']>,
  city_ends_with?: Maybe<Scalars['String']>,
  city_not_ends_with?: Maybe<Scalars['String']>,
  zipCode?: Maybe<Scalars['String']>,
  zipCode_not?: Maybe<Scalars['String']>,
  zipCode_in?: Maybe<Array<Scalars['String']>>,
  zipCode_not_in?: Maybe<Array<Scalars['String']>>,
  zipCode_lt?: Maybe<Scalars['String']>,
  zipCode_lte?: Maybe<Scalars['String']>,
  zipCode_gt?: Maybe<Scalars['String']>,
  zipCode_gte?: Maybe<Scalars['String']>,
  zipCode_contains?: Maybe<Scalars['String']>,
  zipCode_not_contains?: Maybe<Scalars['String']>,
  zipCode_starts_with?: Maybe<Scalars['String']>,
  zipCode_not_starts_with?: Maybe<Scalars['String']>,
  zipCode_ends_with?: Maybe<Scalars['String']>,
  zipCode_not_ends_with?: Maybe<Scalars['String']>,
  address1?: Maybe<Scalars['String']>,
  address1_not?: Maybe<Scalars['String']>,
  address1_in?: Maybe<Array<Scalars['String']>>,
  address1_not_in?: Maybe<Array<Scalars['String']>>,
  address1_lt?: Maybe<Scalars['String']>,
  address1_lte?: Maybe<Scalars['String']>,
  address1_gt?: Maybe<Scalars['String']>,
  address1_gte?: Maybe<Scalars['String']>,
  address1_contains?: Maybe<Scalars['String']>,
  address1_not_contains?: Maybe<Scalars['String']>,
  address1_starts_with?: Maybe<Scalars['String']>,
  address1_not_starts_with?: Maybe<Scalars['String']>,
  address1_ends_with?: Maybe<Scalars['String']>,
  address1_not_ends_with?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  address2_not?: Maybe<Scalars['String']>,
  address2_in?: Maybe<Array<Scalars['String']>>,
  address2_not_in?: Maybe<Array<Scalars['String']>>,
  address2_lt?: Maybe<Scalars['String']>,
  address2_lte?: Maybe<Scalars['String']>,
  address2_gt?: Maybe<Scalars['String']>,
  address2_gte?: Maybe<Scalars['String']>,
  address2_contains?: Maybe<Scalars['String']>,
  address2_not_contains?: Maybe<Scalars['String']>,
  address2_starts_with?: Maybe<Scalars['String']>,
  address2_not_starts_with?: Maybe<Scalars['String']>,
  address2_ends_with?: Maybe<Scalars['String']>,
  address2_not_ends_with?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  latitude_not?: Maybe<Scalars['String']>,
  latitude_in?: Maybe<Array<Scalars['String']>>,
  latitude_not_in?: Maybe<Array<Scalars['String']>>,
  latitude_lt?: Maybe<Scalars['String']>,
  latitude_lte?: Maybe<Scalars['String']>,
  latitude_gt?: Maybe<Scalars['String']>,
  latitude_gte?: Maybe<Scalars['String']>,
  latitude_contains?: Maybe<Scalars['String']>,
  latitude_not_contains?: Maybe<Scalars['String']>,
  latitude_starts_with?: Maybe<Scalars['String']>,
  latitude_not_starts_with?: Maybe<Scalars['String']>,
  latitude_ends_with?: Maybe<Scalars['String']>,
  latitude_not_ends_with?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
  longitude_not?: Maybe<Scalars['String']>,
  longitude_in?: Maybe<Array<Scalars['String']>>,
  longitude_not_in?: Maybe<Array<Scalars['String']>>,
  longitude_lt?: Maybe<Scalars['String']>,
  longitude_lte?: Maybe<Scalars['String']>,
  longitude_gt?: Maybe<Scalars['String']>,
  longitude_gte?: Maybe<Scalars['String']>,
  longitude_contains?: Maybe<Scalars['String']>,
  longitude_not_contains?: Maybe<Scalars['String']>,
  longitude_starts_with?: Maybe<Scalars['String']>,
  longitude_not_starts_with?: Maybe<Scalars['String']>,
  longitude_ends_with?: Maybe<Scalars['String']>,
  longitude_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<LocationWhereInput>>,
  OR?: Maybe<Array<LocationWhereInput>>,
  NOT?: Maybe<Array<LocationWhereInput>>,
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Mutation = {
   __typename?: 'Mutation',
  hello: Scalars['String'],
  createAdminFranchise: AdminFranchise,
  updateAdminFranchise?: Maybe<AdminFranchise>,
  upsertAdminFranchise: AdminFranchise,
  deleteAdminFranchise?: Maybe<AdminFranchise>,
  deleteManyAdminFranchises: BatchPayload,
  createAdminFranchiseArea: AdminFranchiseArea,
  updateAdminFranchiseArea?: Maybe<AdminFranchiseArea>,
  updateManyAdminFranchiseAreas: BatchPayload,
  upsertAdminFranchiseArea: AdminFranchiseArea,
  deleteAdminFranchiseArea?: Maybe<AdminFranchiseArea>,
  deleteManyAdminFranchiseAreas: BatchPayload,
  createCarousel: Carousel,
  updateCarousel?: Maybe<Carousel>,
  updateManyCarousels: BatchPayload,
  upsertCarousel: Carousel,
  deleteCarousel?: Maybe<Carousel>,
  deleteManyCarousels: BatchPayload,
  createCart: Cart,
  updateCart?: Maybe<Cart>,
  updateManyCarts: BatchPayload,
  upsertCart: Cart,
  deleteCart?: Maybe<Cart>,
  deleteManyCarts: BatchPayload,
  createCategory: Category,
  updateCategory?: Maybe<Category>,
  updateManyCategories: BatchPayload,
  upsertCategory: Category,
  deleteCategory?: Maybe<Category>,
  deleteManyCategories: BatchPayload,
  createComment: Comment,
  updateComment?: Maybe<Comment>,
  updateManyComments: BatchPayload,
  upsertComment: Comment,
  deleteComment?: Maybe<Comment>,
  deleteManyComments: BatchPayload,
  createFranchise: Franchise,
  updateFranchise?: Maybe<Franchise>,
  updateManyFranchises: BatchPayload,
  upsertFranchise: Franchise,
  deleteFranchise?: Maybe<Franchise>,
  deleteManyFranchises: BatchPayload,
  createFranchiseArea: FranchiseArea,
  updateFranchiseArea?: Maybe<FranchiseArea>,
  updateManyFranchiseAreas: BatchPayload,
  upsertFranchiseArea: FranchiseArea,
  deleteFranchiseArea?: Maybe<FranchiseArea>,
  deleteManyFranchiseAreas: BatchPayload,
  createLatLng: LatLng,
  updateManyLatLngs: BatchPayload,
  deleteManyLatLngs: BatchPayload,
  createLocation: Location,
  updateLocation?: Maybe<Location>,
  updateManyLocations: BatchPayload,
  upsertLocation: Location,
  deleteLocation?: Maybe<Location>,
  deleteManyLocations: BatchPayload,
  createOrder: Order,
  updateOrder?: Maybe<Order>,
  updateManyOrders: BatchPayload,
  upsertOrder: Order,
  deleteOrder?: Maybe<Order>,
  deleteManyOrders: BatchPayload,
  createPaymentDetail: PaymentDetail,
  updatePaymentDetail?: Maybe<PaymentDetail>,
  updateManyPaymentDetails: BatchPayload,
  upsertPaymentDetail: PaymentDetail,
  deletePaymentDetail?: Maybe<PaymentDetail>,
  deleteManyPaymentDetails: BatchPayload,
  createProduct: Product,
  updateProduct?: Maybe<Product>,
  updateManyProducts: BatchPayload,
  upsertProduct: Product,
  deleteProduct?: Maybe<Product>,
  deleteManyProducts: BatchPayload,
  createSearch: Search,
  updateSearch?: Maybe<Search>,
  updateManySearches: BatchPayload,
  upsertSearch: Search,
  deleteSearch?: Maybe<Search>,
  deleteManySearches: BatchPayload,
  createSeller: Seller,
  updateSeller?: Maybe<Seller>,
  updateManySellers: BatchPayload,
  upsertSeller: Seller,
  deleteSeller?: Maybe<Seller>,
  deleteManySellers: BatchPayload,
  createSize: Size,
  updateSize?: Maybe<Size>,
  updateManySizes: BatchPayload,
  upsertSize: Size,
  deleteSize?: Maybe<Size>,
  deleteManySizes: BatchPayload,
  createSubCategory: SubCategory,
  updateSubCategory?: Maybe<SubCategory>,
  updateManySubCategories: BatchPayload,
  upsertSubCategory: SubCategory,
  deleteSubCategory?: Maybe<SubCategory>,
  deleteManySubCategories: BatchPayload,
  createTag: Tag,
  updateTag?: Maybe<Tag>,
  updateManyTags: BatchPayload,
  upsertTag: Tag,
  deleteTag?: Maybe<Tag>,
  deleteManyTags: BatchPayload,
  createUser: User,
  updateUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  upsertUser: User,
  deleteUser?: Maybe<User>,
  deleteManyUsers: BatchPayload,
  createVariation: Variation,
  updateVariation?: Maybe<Variation>,
  updateManyVariations: BatchPayload,
  upsertVariation: Variation,
  deleteVariation?: Maybe<Variation>,
  deleteManyVariations: BatchPayload,
  createViewedProduct: ViewedProduct,
  updateViewedProduct?: Maybe<ViewedProduct>,
  upsertViewedProduct: ViewedProduct,
  deleteViewedProduct?: Maybe<ViewedProduct>,
  deleteManyViewedProducts: BatchPayload,
};


export type MutationCreateAdminFranchiseArgs = {
  data: AdminFranchiseCreateInput
};


export type MutationUpdateAdminFranchiseArgs = {
  data: AdminFranchiseUpdateInput,
  where: AdminFranchiseWhereUniqueInput
};


export type MutationUpsertAdminFranchiseArgs = {
  where: AdminFranchiseWhereUniqueInput,
  create: AdminFranchiseCreateInput,
  update: AdminFranchiseUpdateInput
};


export type MutationDeleteAdminFranchiseArgs = {
  where: AdminFranchiseWhereUniqueInput
};


export type MutationDeleteManyAdminFranchisesArgs = {
  where?: Maybe<AdminFranchiseWhereInput>
};


export type MutationCreateAdminFranchiseAreaArgs = {
  data: AdminFranchiseAreaCreateInput
};


export type MutationUpdateAdminFranchiseAreaArgs = {
  data: AdminFranchiseAreaUpdateInput,
  where: AdminFranchiseAreaWhereUniqueInput
};


export type MutationUpdateManyAdminFranchiseAreasArgs = {
  data: AdminFranchiseAreaUpdateManyMutationInput,
  where?: Maybe<AdminFranchiseAreaWhereInput>
};


export type MutationUpsertAdminFranchiseAreaArgs = {
  where: AdminFranchiseAreaWhereUniqueInput,
  create: AdminFranchiseAreaCreateInput,
  update: AdminFranchiseAreaUpdateInput
};


export type MutationDeleteAdminFranchiseAreaArgs = {
  where: AdminFranchiseAreaWhereUniqueInput
};


export type MutationDeleteManyAdminFranchiseAreasArgs = {
  where?: Maybe<AdminFranchiseAreaWhereInput>
};


export type MutationCreateCarouselArgs = {
  data: CarouselCreateInput
};


export type MutationUpdateCarouselArgs = {
  data: CarouselUpdateInput,
  where: CarouselWhereUniqueInput
};


export type MutationUpdateManyCarouselsArgs = {
  data: CarouselUpdateManyMutationInput,
  where?: Maybe<CarouselWhereInput>
};


export type MutationUpsertCarouselArgs = {
  where: CarouselWhereUniqueInput,
  create: CarouselCreateInput,
  update: CarouselUpdateInput
};


export type MutationDeleteCarouselArgs = {
  where: CarouselWhereUniqueInput
};


export type MutationDeleteManyCarouselsArgs = {
  where?: Maybe<CarouselWhereInput>
};


export type MutationCreateCartArgs = {
  data: CartCreateInput
};


export type MutationUpdateCartArgs = {
  data: CartUpdateInput,
  where: CartWhereUniqueInput
};


export type MutationUpdateManyCartsArgs = {
  data: CartUpdateManyMutationInput,
  where?: Maybe<CartWhereInput>
};


export type MutationUpsertCartArgs = {
  where: CartWhereUniqueInput,
  create: CartCreateInput,
  update: CartUpdateInput
};


export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput
};


export type MutationDeleteManyCartsArgs = {
  where?: Maybe<CartWhereInput>
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput,
  where: CategoryWhereUniqueInput
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyMutationInput,
  where?: Maybe<CategoryWhereInput>
};


export type MutationUpsertCategoryArgs = {
  where: CategoryWhereUniqueInput,
  create: CategoryCreateInput,
  update: CategoryUpdateInput
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput
};


export type MutationDeleteManyCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput,
  where: CommentWhereUniqueInput
};


export type MutationUpdateManyCommentsArgs = {
  data: CommentUpdateManyMutationInput,
  where?: Maybe<CommentWhereInput>
};


export type MutationUpsertCommentArgs = {
  where: CommentWhereUniqueInput,
  create: CommentCreateInput,
  update: CommentUpdateInput
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput
};


export type MutationDeleteManyCommentsArgs = {
  where?: Maybe<CommentWhereInput>
};


export type MutationCreateFranchiseArgs = {
  data: FranchiseCreateInput
};


export type MutationUpdateFranchiseArgs = {
  data: FranchiseUpdateInput,
  where: FranchiseWhereUniqueInput
};


export type MutationUpdateManyFranchisesArgs = {
  data: FranchiseUpdateManyMutationInput,
  where?: Maybe<FranchiseWhereInput>
};


export type MutationUpsertFranchiseArgs = {
  where: FranchiseWhereUniqueInput,
  create: FranchiseCreateInput,
  update: FranchiseUpdateInput
};


export type MutationDeleteFranchiseArgs = {
  where: FranchiseWhereUniqueInput
};


export type MutationDeleteManyFranchisesArgs = {
  where?: Maybe<FranchiseWhereInput>
};


export type MutationCreateFranchiseAreaArgs = {
  data: FranchiseAreaCreateInput
};


export type MutationUpdateFranchiseAreaArgs = {
  data: FranchiseAreaUpdateInput,
  where: FranchiseAreaWhereUniqueInput
};


export type MutationUpdateManyFranchiseAreasArgs = {
  data: FranchiseAreaUpdateManyMutationInput,
  where?: Maybe<FranchiseAreaWhereInput>
};


export type MutationUpsertFranchiseAreaArgs = {
  where: FranchiseAreaWhereUniqueInput,
  create: FranchiseAreaCreateInput,
  update: FranchiseAreaUpdateInput
};


export type MutationDeleteFranchiseAreaArgs = {
  where: FranchiseAreaWhereUniqueInput
};


export type MutationDeleteManyFranchiseAreasArgs = {
  where?: Maybe<FranchiseAreaWhereInput>
};


export type MutationCreateLatLngArgs = {
  data: LatLngCreateInput
};


export type MutationUpdateManyLatLngsArgs = {
  data: LatLngUpdateManyMutationInput,
  where?: Maybe<LatLngWhereInput>
};


export type MutationDeleteManyLatLngsArgs = {
  where?: Maybe<LatLngWhereInput>
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput,
  where: LocationWhereUniqueInput
};


export type MutationUpdateManyLocationsArgs = {
  data: LocationUpdateManyMutationInput,
  where?: Maybe<LocationWhereInput>
};


export type MutationUpsertLocationArgs = {
  where: LocationWhereUniqueInput,
  create: LocationCreateInput,
  update: LocationUpdateInput
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput
};


export type MutationDeleteManyLocationsArgs = {
  where?: Maybe<LocationWhereInput>
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput,
  where: OrderWhereUniqueInput
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyMutationInput,
  where?: Maybe<OrderWhereInput>
};


export type MutationUpsertOrderArgs = {
  where: OrderWhereUniqueInput,
  create: OrderCreateInput,
  update: OrderUpdateInput
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput
};


export type MutationDeleteManyOrdersArgs = {
  where?: Maybe<OrderWhereInput>
};


export type MutationCreatePaymentDetailArgs = {
  data: PaymentDetailCreateInput
};


export type MutationUpdatePaymentDetailArgs = {
  data: PaymentDetailUpdateInput,
  where: PaymentDetailWhereUniqueInput
};


export type MutationUpdateManyPaymentDetailsArgs = {
  data: PaymentDetailUpdateManyMutationInput,
  where?: Maybe<PaymentDetailWhereInput>
};


export type MutationUpsertPaymentDetailArgs = {
  where: PaymentDetailWhereUniqueInput,
  create: PaymentDetailCreateInput,
  update: PaymentDetailUpdateInput
};


export type MutationDeletePaymentDetailArgs = {
  where: PaymentDetailWhereUniqueInput
};


export type MutationDeleteManyPaymentDetailsArgs = {
  where?: Maybe<PaymentDetailWhereInput>
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput,
  where: ProductWhereUniqueInput
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyMutationInput,
  where?: Maybe<ProductWhereInput>
};


export type MutationUpsertProductArgs = {
  where: ProductWhereUniqueInput,
  create: ProductCreateInput,
  update: ProductUpdateInput
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput
};


export type MutationDeleteManyProductsArgs = {
  where?: Maybe<ProductWhereInput>
};


export type MutationCreateSearchArgs = {
  data: SearchCreateInput
};


export type MutationUpdateSearchArgs = {
  data: SearchUpdateInput,
  where: SearchWhereUniqueInput
};


export type MutationUpdateManySearchesArgs = {
  data: SearchUpdateManyMutationInput,
  where?: Maybe<SearchWhereInput>
};


export type MutationUpsertSearchArgs = {
  where: SearchWhereUniqueInput,
  create: SearchCreateInput,
  update: SearchUpdateInput
};


export type MutationDeleteSearchArgs = {
  where: SearchWhereUniqueInput
};


export type MutationDeleteManySearchesArgs = {
  where?: Maybe<SearchWhereInput>
};


export type MutationCreateSellerArgs = {
  data: SellerCreateInput
};


export type MutationUpdateSellerArgs = {
  data: SellerUpdateInput,
  where: SellerWhereUniqueInput
};


export type MutationUpdateManySellersArgs = {
  data: SellerUpdateManyMutationInput,
  where?: Maybe<SellerWhereInput>
};


export type MutationUpsertSellerArgs = {
  where: SellerWhereUniqueInput,
  create: SellerCreateInput,
  update: SellerUpdateInput
};


export type MutationDeleteSellerArgs = {
  where: SellerWhereUniqueInput
};


export type MutationDeleteManySellersArgs = {
  where?: Maybe<SellerWhereInput>
};


export type MutationCreateSizeArgs = {
  data: SizeCreateInput
};


export type MutationUpdateSizeArgs = {
  data: SizeUpdateInput,
  where: SizeWhereUniqueInput
};


export type MutationUpdateManySizesArgs = {
  data: SizeUpdateManyMutationInput,
  where?: Maybe<SizeWhereInput>
};


export type MutationUpsertSizeArgs = {
  where: SizeWhereUniqueInput,
  create: SizeCreateInput,
  update: SizeUpdateInput
};


export type MutationDeleteSizeArgs = {
  where: SizeWhereUniqueInput
};


export type MutationDeleteManySizesArgs = {
  where?: Maybe<SizeWhereInput>
};


export type MutationCreateSubCategoryArgs = {
  data: SubCategoryCreateInput
};


export type MutationUpdateSubCategoryArgs = {
  data: SubCategoryUpdateInput,
  where: SubCategoryWhereUniqueInput
};


export type MutationUpdateManySubCategoriesArgs = {
  data: SubCategoryUpdateManyMutationInput,
  where?: Maybe<SubCategoryWhereInput>
};


export type MutationUpsertSubCategoryArgs = {
  where: SubCategoryWhereUniqueInput,
  create: SubCategoryCreateInput,
  update: SubCategoryUpdateInput
};


export type MutationDeleteSubCategoryArgs = {
  where: SubCategoryWhereUniqueInput
};


export type MutationDeleteManySubCategoriesArgs = {
  where?: Maybe<SubCategoryWhereInput>
};


export type MutationCreateTagArgs = {
  data: TagCreateInput
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput,
  where: TagWhereUniqueInput
};


export type MutationUpdateManyTagsArgs = {
  data: TagUpdateManyMutationInput,
  where?: Maybe<TagWhereInput>
};


export type MutationUpsertTagArgs = {
  where: TagWhereUniqueInput,
  create: TagCreateInput,
  update: TagUpdateInput
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput
};


export type MutationDeleteManyTagsArgs = {
  where?: Maybe<TagWhereInput>
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationCreateVariationArgs = {
  data: VariationCreateInput
};


export type MutationUpdateVariationArgs = {
  data: VariationUpdateInput,
  where: VariationWhereUniqueInput
};


export type MutationUpdateManyVariationsArgs = {
  data: VariationUpdateManyMutationInput,
  where?: Maybe<VariationWhereInput>
};


export type MutationUpsertVariationArgs = {
  where: VariationWhereUniqueInput,
  create: VariationCreateInput,
  update: VariationUpdateInput
};


export type MutationDeleteVariationArgs = {
  where: VariationWhereUniqueInput
};


export type MutationDeleteManyVariationsArgs = {
  where?: Maybe<VariationWhereInput>
};


export type MutationCreateViewedProductArgs = {
  data: ViewedProductCreateInput
};


export type MutationUpdateViewedProductArgs = {
  data: ViewedProductUpdateInput,
  where: ViewedProductWhereUniqueInput
};


export type MutationUpsertViewedProductArgs = {
  where: ViewedProductWhereUniqueInput,
  create: ViewedProductCreateInput,
  update: ViewedProductUpdateInput
};


export type MutationDeleteViewedProductArgs = {
  where: ViewedProductWhereUniqueInput
};


export type MutationDeleteManyViewedProductsArgs = {
  where?: Maybe<ViewedProductWhereInput>
};

export type Node = {
  id: Scalars['ID'],
};

export enum NoOfChildrens {
  NoChildren = 'NO_CHILDREN',
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
  MoreThanFour = 'MORE_THAN_FOUR'
}

export type Order = {
   __typename?: 'Order',
  id: Scalars['ID'],
  total: Scalars['Int'],
  totalProducts: Scalars['Int'],
  soldBy?: Maybe<SoldBy>,
  adminSeen: Scalars['Boolean'],
  receivedDate?: Maybe<Scalars['DateTime']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  paymentMethod: PaymentMethod,
  status: OrderStatus,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
  orderBy: User,
  shippingAddress: Location,
  products?: Maybe<Array<Cart>>,
};


export type OrderProductsArgs = {
  where?: Maybe<CartWhereInput>,
  orderBy?: Maybe<CartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type OrderConnection = {
   __typename?: 'OrderConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<OrderEdge>>,
  aggregate: AggregateOrder,
};

export type OrderCreateInput = {
  id?: Maybe<Scalars['ID']>,
  total: Scalars['Int'],
  totalProducts: Scalars['Int'],
  soldBy?: Maybe<SoldBy>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  paymentMethod: PaymentMethod,
  status?: Maybe<OrderStatus>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
  orderBy: UserCreateOneWithoutOrdersInput,
  shippingAddress: LocationCreateOneInput,
  products?: Maybe<CartCreateManyInput>,
};

export type OrderCreateManyWithoutOrderByInput = {
  create?: Maybe<Array<OrderCreateWithoutOrderByInput>>,
  connect?: Maybe<Array<OrderWhereUniqueInput>>,
};

export type OrderCreateWithoutOrderByInput = {
  id?: Maybe<Scalars['ID']>,
  total: Scalars['Int'],
  totalProducts: Scalars['Int'],
  soldBy?: Maybe<SoldBy>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  paymentMethod: PaymentMethod,
  status?: Maybe<OrderStatus>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
  shippingAddress: LocationCreateOneInput,
  products?: Maybe<CartCreateManyInput>,
};

export type OrderEdge = {
   __typename?: 'OrderEdge',
  node: Order,
  cursor: Scalars['String'],
};

export enum OrderOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  TotalProductsAsc = 'totalProducts_ASC',
  TotalProductsDesc = 'totalProducts_DESC',
  SoldByAsc = 'soldBy_ASC',
  SoldByDesc = 'soldBy_DESC',
  AdminSeenAsc = 'adminSeen_ASC',
  AdminSeenDesc = 'adminSeen_DESC',
  ReceivedDateAsc = 'receivedDate_ASC',
  ReceivedDateDesc = 'receivedDate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  PaymentMethodAsc = 'paymentMethod_ASC',
  PaymentMethodDesc = 'paymentMethod_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  ForSubscriptionPurposeOnlyAsc = 'forSubscriptionPurposeOnly_ASC',
  ForSubscriptionPurposeOnlyDesc = 'forSubscriptionPurposeOnly_DESC'
}

export type OrderScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  total?: Maybe<Scalars['Int']>,
  total_not?: Maybe<Scalars['Int']>,
  total_in?: Maybe<Array<Scalars['Int']>>,
  total_not_in?: Maybe<Array<Scalars['Int']>>,
  total_lt?: Maybe<Scalars['Int']>,
  total_lte?: Maybe<Scalars['Int']>,
  total_gt?: Maybe<Scalars['Int']>,
  total_gte?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  totalProducts_not?: Maybe<Scalars['Int']>,
  totalProducts_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_not_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_lt?: Maybe<Scalars['Int']>,
  totalProducts_lte?: Maybe<Scalars['Int']>,
  totalProducts_gt?: Maybe<Scalars['Int']>,
  totalProducts_gte?: Maybe<Scalars['Int']>,
  soldBy?: Maybe<SoldBy>,
  soldBy_not?: Maybe<SoldBy>,
  soldBy_in?: Maybe<Array<SoldBy>>,
  soldBy_not_in?: Maybe<Array<SoldBy>>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  adminSeen_not?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  receivedDate_not?: Maybe<Scalars['DateTime']>,
  receivedDate_in?: Maybe<Array<Scalars['DateTime']>>,
  receivedDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  receivedDate_lt?: Maybe<Scalars['DateTime']>,
  receivedDate_lte?: Maybe<Scalars['DateTime']>,
  receivedDate_gt?: Maybe<Scalars['DateTime']>,
  receivedDate_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  latitude_not?: Maybe<Scalars['Float']>,
  latitude_in?: Maybe<Array<Scalars['Float']>>,
  latitude_not_in?: Maybe<Array<Scalars['Float']>>,
  latitude_lt?: Maybe<Scalars['Float']>,
  latitude_lte?: Maybe<Scalars['Float']>,
  latitude_gt?: Maybe<Scalars['Float']>,
  latitude_gte?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  longitude_not?: Maybe<Scalars['Float']>,
  longitude_in?: Maybe<Array<Scalars['Float']>>,
  longitude_not_in?: Maybe<Array<Scalars['Float']>>,
  longitude_lt?: Maybe<Scalars['Float']>,
  longitude_lte?: Maybe<Scalars['Float']>,
  longitude_gt?: Maybe<Scalars['Float']>,
  longitude_gte?: Maybe<Scalars['Float']>,
  paymentMethod?: Maybe<PaymentMethod>,
  paymentMethod_not?: Maybe<PaymentMethod>,
  paymentMethod_in?: Maybe<Array<PaymentMethod>>,
  paymentMethod_not_in?: Maybe<Array<PaymentMethod>>,
  status?: Maybe<OrderStatus>,
  status_not?: Maybe<OrderStatus>,
  status_in?: Maybe<Array<OrderStatus>>,
  status_not_in?: Maybe<Array<OrderStatus>>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_not?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_in?: Maybe<Array<Scalars['DateTime']>>,
  forSubscriptionPurposeOnly_not_in?: Maybe<Array<Scalars['DateTime']>>,
  forSubscriptionPurposeOnly_lt?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_lte?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_gt?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<OrderScalarWhereInput>>,
  OR?: Maybe<Array<OrderScalarWhereInput>>,
  NOT?: Maybe<Array<OrderScalarWhereInput>>,
};

export enum OrderStatus {
  Pending = 'PENDING',
  Received = 'RECEIVED',
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Returned = 'RETURNED'
}

export type OrderUpdateInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  soldBy?: Maybe<SoldBy>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  paymentMethod?: Maybe<PaymentMethod>,
  status?: Maybe<OrderStatus>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
  orderBy?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>,
  shippingAddress?: Maybe<LocationUpdateOneRequiredInput>,
  products?: Maybe<CartUpdateManyInput>,
};

export type OrderUpdateManyDataInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  soldBy?: Maybe<SoldBy>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  paymentMethod?: Maybe<PaymentMethod>,
  status?: Maybe<OrderStatus>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
};

export type OrderUpdateManyMutationInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  soldBy?: Maybe<SoldBy>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  paymentMethod?: Maybe<PaymentMethod>,
  status?: Maybe<OrderStatus>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
};

export type OrderUpdateManyWithoutOrderByInput = {
  create?: Maybe<Array<OrderCreateWithoutOrderByInput>>,
  delete?: Maybe<Array<OrderWhereUniqueInput>>,
  connect?: Maybe<Array<OrderWhereUniqueInput>>,
  set?: Maybe<Array<OrderWhereUniqueInput>>,
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>,
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutOrderByInput>>,
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutOrderByInput>>,
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>,
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>,
};

export type OrderUpdateManyWithWhereNestedInput = {
  where: OrderScalarWhereInput,
  data: OrderUpdateManyDataInput,
};

export type OrderUpdateWithoutOrderByDataInput = {
  total?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  soldBy?: Maybe<SoldBy>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  paymentMethod?: Maybe<PaymentMethod>,
  status?: Maybe<OrderStatus>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
  shippingAddress?: Maybe<LocationUpdateOneRequiredInput>,
  products?: Maybe<CartUpdateManyInput>,
};

export type OrderUpdateWithWhereUniqueWithoutOrderByInput = {
  where: OrderWhereUniqueInput,
  data: OrderUpdateWithoutOrderByDataInput,
};

export type OrderUpsertWithWhereUniqueWithoutOrderByInput = {
  where: OrderWhereUniqueInput,
  update: OrderUpdateWithoutOrderByDataInput,
  create: OrderCreateWithoutOrderByInput,
};

export type OrderWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  total?: Maybe<Scalars['Int']>,
  total_not?: Maybe<Scalars['Int']>,
  total_in?: Maybe<Array<Scalars['Int']>>,
  total_not_in?: Maybe<Array<Scalars['Int']>>,
  total_lt?: Maybe<Scalars['Int']>,
  total_lte?: Maybe<Scalars['Int']>,
  total_gt?: Maybe<Scalars['Int']>,
  total_gte?: Maybe<Scalars['Int']>,
  totalProducts?: Maybe<Scalars['Int']>,
  totalProducts_not?: Maybe<Scalars['Int']>,
  totalProducts_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_not_in?: Maybe<Array<Scalars['Int']>>,
  totalProducts_lt?: Maybe<Scalars['Int']>,
  totalProducts_lte?: Maybe<Scalars['Int']>,
  totalProducts_gt?: Maybe<Scalars['Int']>,
  totalProducts_gte?: Maybe<Scalars['Int']>,
  soldBy?: Maybe<SoldBy>,
  soldBy_not?: Maybe<SoldBy>,
  soldBy_in?: Maybe<Array<SoldBy>>,
  soldBy_not_in?: Maybe<Array<SoldBy>>,
  adminSeen?: Maybe<Scalars['Boolean']>,
  adminSeen_not?: Maybe<Scalars['Boolean']>,
  receivedDate?: Maybe<Scalars['DateTime']>,
  receivedDate_not?: Maybe<Scalars['DateTime']>,
  receivedDate_in?: Maybe<Array<Scalars['DateTime']>>,
  receivedDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  receivedDate_lt?: Maybe<Scalars['DateTime']>,
  receivedDate_lte?: Maybe<Scalars['DateTime']>,
  receivedDate_gt?: Maybe<Scalars['DateTime']>,
  receivedDate_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  latitude?: Maybe<Scalars['Float']>,
  latitude_not?: Maybe<Scalars['Float']>,
  latitude_in?: Maybe<Array<Scalars['Float']>>,
  latitude_not_in?: Maybe<Array<Scalars['Float']>>,
  latitude_lt?: Maybe<Scalars['Float']>,
  latitude_lte?: Maybe<Scalars['Float']>,
  latitude_gt?: Maybe<Scalars['Float']>,
  latitude_gte?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  longitude_not?: Maybe<Scalars['Float']>,
  longitude_in?: Maybe<Array<Scalars['Float']>>,
  longitude_not_in?: Maybe<Array<Scalars['Float']>>,
  longitude_lt?: Maybe<Scalars['Float']>,
  longitude_lte?: Maybe<Scalars['Float']>,
  longitude_gt?: Maybe<Scalars['Float']>,
  longitude_gte?: Maybe<Scalars['Float']>,
  paymentMethod?: Maybe<PaymentMethod>,
  paymentMethod_not?: Maybe<PaymentMethod>,
  paymentMethod_in?: Maybe<Array<PaymentMethod>>,
  paymentMethod_not_in?: Maybe<Array<PaymentMethod>>,
  status?: Maybe<OrderStatus>,
  status_not?: Maybe<OrderStatus>,
  status_in?: Maybe<Array<OrderStatus>>,
  status_not_in?: Maybe<Array<OrderStatus>>,
  forSubscriptionPurposeOnly?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_not?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_in?: Maybe<Array<Scalars['DateTime']>>,
  forSubscriptionPurposeOnly_not_in?: Maybe<Array<Scalars['DateTime']>>,
  forSubscriptionPurposeOnly_lt?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_lte?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_gt?: Maybe<Scalars['DateTime']>,
  forSubscriptionPurposeOnly_gte?: Maybe<Scalars['DateTime']>,
  orderBy?: Maybe<UserWhereInput>,
  shippingAddress?: Maybe<LocationWhereInput>,
  products_every?: Maybe<CartWhereInput>,
  products_some?: Maybe<CartWhereInput>,
  products_none?: Maybe<CartWhereInput>,
  AND?: Maybe<Array<OrderWhereInput>>,
  OR?: Maybe<Array<OrderWhereInput>>,
  NOT?: Maybe<Array<OrderWhereInput>>,
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type PaymentDetail = {
   __typename?: 'PaymentDetail',
  id: Scalars['ID'],
  IFSC_CODE: Scalars['Int'],
  bankName: Scalars['String'],
  accountNumber: Scalars['String'],
};

export type PaymentDetailConnection = {
   __typename?: 'PaymentDetailConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PaymentDetailEdge>>,
  aggregate: AggregatePaymentDetail,
};

export type PaymentDetailCreateInput = {
  id?: Maybe<Scalars['ID']>,
  IFSC_CODE: Scalars['Int'],
  bankName: Scalars['String'],
  accountNumber: Scalars['String'],
};

export type PaymentDetailCreateOneInput = {
  create?: Maybe<PaymentDetailCreateInput>,
  connect?: Maybe<PaymentDetailWhereUniqueInput>,
};

export type PaymentDetailEdge = {
   __typename?: 'PaymentDetailEdge',
  node: PaymentDetail,
  cursor: Scalars['String'],
};

export enum PaymentDetailOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IfscCodeAsc = 'IFSC_CODE_ASC',
  IfscCodeDesc = 'IFSC_CODE_DESC',
  BankNameAsc = 'bankName_ASC',
  BankNameDesc = 'bankName_DESC',
  AccountNumberAsc = 'accountNumber_ASC',
  AccountNumberDesc = 'accountNumber_DESC'
}

export type PaymentDetailUpdateDataInput = {
  IFSC_CODE?: Maybe<Scalars['Int']>,
  bankName?: Maybe<Scalars['String']>,
  accountNumber?: Maybe<Scalars['String']>,
};

export type PaymentDetailUpdateInput = {
  IFSC_CODE?: Maybe<Scalars['Int']>,
  bankName?: Maybe<Scalars['String']>,
  accountNumber?: Maybe<Scalars['String']>,
};

export type PaymentDetailUpdateManyMutationInput = {
  IFSC_CODE?: Maybe<Scalars['Int']>,
  bankName?: Maybe<Scalars['String']>,
  accountNumber?: Maybe<Scalars['String']>,
};

export type PaymentDetailUpdateOneInput = {
  create?: Maybe<PaymentDetailCreateInput>,
  update?: Maybe<PaymentDetailUpdateDataInput>,
  upsert?: Maybe<PaymentDetailUpsertNestedInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<PaymentDetailWhereUniqueInput>,
};

export type PaymentDetailUpsertNestedInput = {
  update: PaymentDetailUpdateDataInput,
  create: PaymentDetailCreateInput,
};

export type PaymentDetailWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  IFSC_CODE?: Maybe<Scalars['Int']>,
  IFSC_CODE_not?: Maybe<Scalars['Int']>,
  IFSC_CODE_in?: Maybe<Array<Scalars['Int']>>,
  IFSC_CODE_not_in?: Maybe<Array<Scalars['Int']>>,
  IFSC_CODE_lt?: Maybe<Scalars['Int']>,
  IFSC_CODE_lte?: Maybe<Scalars['Int']>,
  IFSC_CODE_gt?: Maybe<Scalars['Int']>,
  IFSC_CODE_gte?: Maybe<Scalars['Int']>,
  bankName?: Maybe<Scalars['String']>,
  bankName_not?: Maybe<Scalars['String']>,
  bankName_in?: Maybe<Array<Scalars['String']>>,
  bankName_not_in?: Maybe<Array<Scalars['String']>>,
  bankName_lt?: Maybe<Scalars['String']>,
  bankName_lte?: Maybe<Scalars['String']>,
  bankName_gt?: Maybe<Scalars['String']>,
  bankName_gte?: Maybe<Scalars['String']>,
  bankName_contains?: Maybe<Scalars['String']>,
  bankName_not_contains?: Maybe<Scalars['String']>,
  bankName_starts_with?: Maybe<Scalars['String']>,
  bankName_not_starts_with?: Maybe<Scalars['String']>,
  bankName_ends_with?: Maybe<Scalars['String']>,
  bankName_not_ends_with?: Maybe<Scalars['String']>,
  accountNumber?: Maybe<Scalars['String']>,
  accountNumber_not?: Maybe<Scalars['String']>,
  accountNumber_in?: Maybe<Array<Scalars['String']>>,
  accountNumber_not_in?: Maybe<Array<Scalars['String']>>,
  accountNumber_lt?: Maybe<Scalars['String']>,
  accountNumber_lte?: Maybe<Scalars['String']>,
  accountNumber_gt?: Maybe<Scalars['String']>,
  accountNumber_gte?: Maybe<Scalars['String']>,
  accountNumber_contains?: Maybe<Scalars['String']>,
  accountNumber_not_contains?: Maybe<Scalars['String']>,
  accountNumber_starts_with?: Maybe<Scalars['String']>,
  accountNumber_not_starts_with?: Maybe<Scalars['String']>,
  accountNumber_ends_with?: Maybe<Scalars['String']>,
  accountNumber_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<PaymentDetailWhereInput>>,
  OR?: Maybe<Array<PaymentDetailWhereInput>>,
  NOT?: Maybe<Array<PaymentDetailWhereInput>>,
};

export type PaymentDetailWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum PaymentMethod {
  Cod = 'COD',
  Eswea = 'ESWEA'
}

export type Product = {
   __typename?: 'Product',
  id: Scalars['ID'],
  price: Scalars['Int'],
  sellerPrice?: Maybe<Scalars['Int']>,
  discountPercent: Scalars['Int'],
  returnableSKMoney: Scalars['Int'],
  viewed: Scalars['Int'],
  name: Scalars['String'],
  image: Scalars['String'],
  description: Scalars['String'],
  deliveryWithin: Scalars['String'],
  isApproved: Scalars['Boolean'],
  featured: Scalars['Boolean'],
  available: Scalars['Boolean'],
  isSkMoneyUsable: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  dispatchDuration: Duration,
  deliveryDuration: Duration,
  seller: Seller,
  category: Category,
  subCategory: SubCategory,
  tags: Array<Tag>,
  variations: Array<Variation>,
  images: Array<Scalars['String']>,
};

export type ProductConnection = {
   __typename?: 'ProductConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ProductEdge>>,
  aggregate: AggregateProduct,
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['ID']>,
  price: Scalars['Int'],
  sellerPrice: Scalars['Int'],
  discountPercent?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  image: Scalars['String'],
  description: Scalars['String'],
  deliveryWithin?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  dispatchDuration?: Maybe<Duration>,
  deliveryDuration?: Maybe<Duration>,
  seller: SellerCreateOneWithoutProductsInput,
  category: CategoryCreateOneInput,
  subCategory: SubCategoryCreateOneInput,
  tags?: Maybe<TagCreateManyInput>,
  variations?: Maybe<VariationCreateManyInput>,
};

export type ProductCreateManyInput = {
  create?: Maybe<Array<ProductCreateInput>>,
  connect?: Maybe<Array<ProductWhereUniqueInput>>,
};

export type ProductCreateManyWithoutSellerInput = {
  create?: Maybe<Array<ProductCreateWithoutSellerInput>>,
  connect?: Maybe<Array<ProductWhereUniqueInput>>,
};

export type ProductCreateOneInput = {
  create?: Maybe<ProductCreateInput>,
  connect?: Maybe<ProductWhereUniqueInput>,
};

export type ProductCreateWithoutSellerInput = {
  id?: Maybe<Scalars['ID']>,
  price: Scalars['Int'],
  sellerPrice: Scalars['Int'],
  discountPercent?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  image: Scalars['String'],
  description: Scalars['String'],
  deliveryWithin?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  dispatchDuration?: Maybe<Duration>,
  deliveryDuration?: Maybe<Duration>,
  category: CategoryCreateOneInput,
  subCategory: SubCategoryCreateOneInput,
  tags?: Maybe<TagCreateManyInput>,
  variations?: Maybe<VariationCreateManyInput>,
};

export type ProductEdge = {
   __typename?: 'ProductEdge',
  node: Product,
  cursor: Scalars['String'],
};

export enum ProductOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SellerPriceAsc = 'sellerPrice_ASC',
  SellerPriceDesc = 'sellerPrice_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  ReturnableSkMoneyAsc = 'returnableSKMoney_ASC',
  ReturnableSkMoneyDesc = 'returnableSKMoney_DESC',
  ViewedAsc = 'viewed_ASC',
  ViewedDesc = 'viewed_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DeliveryWithinAsc = 'deliveryWithin_ASC',
  DeliveryWithinDesc = 'deliveryWithin_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  AvailableAsc = 'available_ASC',
  AvailableDesc = 'available_DESC',
  IsSkMoneyUsableAsc = 'isSkMoneyUsable_ASC',
  IsSkMoneyUsableDesc = 'isSkMoneyUsable_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DispatchDurationAsc = 'dispatchDuration_ASC',
  DispatchDurationDesc = 'dispatchDuration_DESC',
  DeliveryDurationAsc = 'deliveryDuration_ASC',
  DeliveryDurationDesc = 'deliveryDuration_DESC'
}

export type ProductScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  price?: Maybe<Scalars['Int']>,
  price_not?: Maybe<Scalars['Int']>,
  price_in?: Maybe<Array<Scalars['Int']>>,
  price_not_in?: Maybe<Array<Scalars['Int']>>,
  price_lt?: Maybe<Scalars['Int']>,
  price_lte?: Maybe<Scalars['Int']>,
  price_gt?: Maybe<Scalars['Int']>,
  price_gte?: Maybe<Scalars['Int']>,
  sellerPrice?: Maybe<Scalars['Int']>,
  sellerPrice_not?: Maybe<Scalars['Int']>,
  sellerPrice_in?: Maybe<Array<Scalars['Int']>>,
  sellerPrice_not_in?: Maybe<Array<Scalars['Int']>>,
  sellerPrice_lt?: Maybe<Scalars['Int']>,
  sellerPrice_lte?: Maybe<Scalars['Int']>,
  sellerPrice_gt?: Maybe<Scalars['Int']>,
  sellerPrice_gte?: Maybe<Scalars['Int']>,
  discountPercent?: Maybe<Scalars['Int']>,
  discountPercent_not?: Maybe<Scalars['Int']>,
  discountPercent_in?: Maybe<Array<Scalars['Int']>>,
  discountPercent_not_in?: Maybe<Array<Scalars['Int']>>,
  discountPercent_lt?: Maybe<Scalars['Int']>,
  discountPercent_lte?: Maybe<Scalars['Int']>,
  discountPercent_gt?: Maybe<Scalars['Int']>,
  discountPercent_gte?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  returnableSKMoney_not?: Maybe<Scalars['Int']>,
  returnableSKMoney_in?: Maybe<Array<Scalars['Int']>>,
  returnableSKMoney_not_in?: Maybe<Array<Scalars['Int']>>,
  returnableSKMoney_lt?: Maybe<Scalars['Int']>,
  returnableSKMoney_lte?: Maybe<Scalars['Int']>,
  returnableSKMoney_gt?: Maybe<Scalars['Int']>,
  returnableSKMoney_gte?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  viewed_not?: Maybe<Scalars['Int']>,
  viewed_in?: Maybe<Array<Scalars['Int']>>,
  viewed_not_in?: Maybe<Array<Scalars['Int']>>,
  viewed_lt?: Maybe<Scalars['Int']>,
  viewed_lte?: Maybe<Scalars['Int']>,
  viewed_gt?: Maybe<Scalars['Int']>,
  viewed_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  deliveryWithin?: Maybe<Scalars['String']>,
  deliveryWithin_not?: Maybe<Scalars['String']>,
  deliveryWithin_in?: Maybe<Array<Scalars['String']>>,
  deliveryWithin_not_in?: Maybe<Array<Scalars['String']>>,
  deliveryWithin_lt?: Maybe<Scalars['String']>,
  deliveryWithin_lte?: Maybe<Scalars['String']>,
  deliveryWithin_gt?: Maybe<Scalars['String']>,
  deliveryWithin_gte?: Maybe<Scalars['String']>,
  deliveryWithin_contains?: Maybe<Scalars['String']>,
  deliveryWithin_not_contains?: Maybe<Scalars['String']>,
  deliveryWithin_starts_with?: Maybe<Scalars['String']>,
  deliveryWithin_not_starts_with?: Maybe<Scalars['String']>,
  deliveryWithin_ends_with?: Maybe<Scalars['String']>,
  deliveryWithin_not_ends_with?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  featured_not?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  isApproved_not?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  available_not?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  dispatchDuration?: Maybe<Duration>,
  dispatchDuration_not?: Maybe<Duration>,
  dispatchDuration_in?: Maybe<Array<Duration>>,
  dispatchDuration_not_in?: Maybe<Array<Duration>>,
  deliveryDuration?: Maybe<Duration>,
  deliveryDuration_not?: Maybe<Duration>,
  deliveryDuration_in?: Maybe<Array<Duration>>,
  deliveryDuration_not_in?: Maybe<Array<Duration>>,
  AND?: Maybe<Array<ProductScalarWhereInput>>,
  OR?: Maybe<Array<ProductScalarWhereInput>>,
  NOT?: Maybe<Array<ProductScalarWhereInput>>,
};

export type ProductUpdateDataInput = {
  price?: Maybe<Scalars['Int']>,
  sellerPrice?: Maybe<Scalars['Int']>,
  discountPercent?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  deliveryWithin?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  dispatchDuration?: Maybe<Duration>,
  deliveryDuration?: Maybe<Duration>,
  seller?: Maybe<SellerUpdateOneRequiredWithoutProductsInput>,
  category?: Maybe<CategoryUpdateOneRequiredInput>,
  subCategory?: Maybe<SubCategoryUpdateOneRequiredInput>,
  tags?: Maybe<TagUpdateManyInput>,
  variations?: Maybe<VariationUpdateManyInput>,
};

export type ProductUpdateInput = {
  price?: Maybe<Scalars['Int']>,
  sellerPrice?: Maybe<Scalars['Int']>,
  discountPercent?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  deliveryWithin?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  dispatchDuration?: Maybe<Duration>,
  deliveryDuration?: Maybe<Duration>,
  seller?: Maybe<SellerUpdateOneRequiredWithoutProductsInput>,
  category?: Maybe<CategoryUpdateOneRequiredInput>,
  subCategory?: Maybe<SubCategoryUpdateOneRequiredInput>,
  tags?: Maybe<TagUpdateManyInput>,
  variations?: Maybe<VariationUpdateManyInput>,
};

export type ProductUpdateManyDataInput = {
  price?: Maybe<Scalars['Int']>,
  sellerPrice?: Maybe<Scalars['Int']>,
  discountPercent?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  deliveryWithin?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  dispatchDuration?: Maybe<Duration>,
  deliveryDuration?: Maybe<Duration>,
};

export type ProductUpdateManyInput = {
  create?: Maybe<Array<ProductCreateInput>>,
  update?: Maybe<Array<ProductUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<ProductWhereUniqueInput>>,
  connect?: Maybe<Array<ProductWhereUniqueInput>>,
  set?: Maybe<Array<ProductWhereUniqueInput>>,
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>,
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>,
};

export type ProductUpdateManyMutationInput = {
  price?: Maybe<Scalars['Int']>,
  sellerPrice?: Maybe<Scalars['Int']>,
  discountPercent?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  deliveryWithin?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  dispatchDuration?: Maybe<Duration>,
  deliveryDuration?: Maybe<Duration>,
};

export type ProductUpdateManyWithoutSellerInput = {
  create?: Maybe<Array<ProductCreateWithoutSellerInput>>,
  delete?: Maybe<Array<ProductWhereUniqueInput>>,
  connect?: Maybe<Array<ProductWhereUniqueInput>>,
  set?: Maybe<Array<ProductWhereUniqueInput>>,
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>,
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutSellerInput>>,
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutSellerInput>>,
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>,
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>,
};

export type ProductUpdateManyWithWhereNestedInput = {
  where: ProductScalarWhereInput,
  data: ProductUpdateManyDataInput,
};

export type ProductUpdateOneRequiredInput = {
  create?: Maybe<ProductCreateInput>,
  update?: Maybe<ProductUpdateDataInput>,
  upsert?: Maybe<ProductUpsertNestedInput>,
  connect?: Maybe<ProductWhereUniqueInput>,
};

export type ProductUpdateWithoutSellerDataInput = {
  price?: Maybe<Scalars['Int']>,
  sellerPrice?: Maybe<Scalars['Int']>,
  discountPercent?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  deliveryWithin?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  dispatchDuration?: Maybe<Duration>,
  deliveryDuration?: Maybe<Duration>,
  category?: Maybe<CategoryUpdateOneRequiredInput>,
  subCategory?: Maybe<SubCategoryUpdateOneRequiredInput>,
  tags?: Maybe<TagUpdateManyInput>,
  variations?: Maybe<VariationUpdateManyInput>,
};

export type ProductUpdateWithWhereUniqueNestedInput = {
  where: ProductWhereUniqueInput,
  data: ProductUpdateDataInput,
};

export type ProductUpdateWithWhereUniqueWithoutSellerInput = {
  where: ProductWhereUniqueInput,
  data: ProductUpdateWithoutSellerDataInput,
};

export type ProductUpsertNestedInput = {
  update: ProductUpdateDataInput,
  create: ProductCreateInput,
};

export type ProductUpsertWithWhereUniqueNestedInput = {
  where: ProductWhereUniqueInput,
  update: ProductUpdateDataInput,
  create: ProductCreateInput,
};

export type ProductUpsertWithWhereUniqueWithoutSellerInput = {
  where: ProductWhereUniqueInput,
  update: ProductUpdateWithoutSellerDataInput,
  create: ProductCreateWithoutSellerInput,
};

export type ProductWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  price?: Maybe<Scalars['Int']>,
  price_not?: Maybe<Scalars['Int']>,
  price_in?: Maybe<Array<Scalars['Int']>>,
  price_not_in?: Maybe<Array<Scalars['Int']>>,
  price_lt?: Maybe<Scalars['Int']>,
  price_lte?: Maybe<Scalars['Int']>,
  price_gt?: Maybe<Scalars['Int']>,
  price_gte?: Maybe<Scalars['Int']>,
  sellerPrice?: Maybe<Scalars['Int']>,
  sellerPrice_not?: Maybe<Scalars['Int']>,
  sellerPrice_in?: Maybe<Array<Scalars['Int']>>,
  sellerPrice_not_in?: Maybe<Array<Scalars['Int']>>,
  sellerPrice_lt?: Maybe<Scalars['Int']>,
  sellerPrice_lte?: Maybe<Scalars['Int']>,
  sellerPrice_gt?: Maybe<Scalars['Int']>,
  sellerPrice_gte?: Maybe<Scalars['Int']>,
  discountPercent?: Maybe<Scalars['Int']>,
  discountPercent_not?: Maybe<Scalars['Int']>,
  discountPercent_in?: Maybe<Array<Scalars['Int']>>,
  discountPercent_not_in?: Maybe<Array<Scalars['Int']>>,
  discountPercent_lt?: Maybe<Scalars['Int']>,
  discountPercent_lte?: Maybe<Scalars['Int']>,
  discountPercent_gt?: Maybe<Scalars['Int']>,
  discountPercent_gte?: Maybe<Scalars['Int']>,
  returnableSKMoney?: Maybe<Scalars['Int']>,
  returnableSKMoney_not?: Maybe<Scalars['Int']>,
  returnableSKMoney_in?: Maybe<Array<Scalars['Int']>>,
  returnableSKMoney_not_in?: Maybe<Array<Scalars['Int']>>,
  returnableSKMoney_lt?: Maybe<Scalars['Int']>,
  returnableSKMoney_lte?: Maybe<Scalars['Int']>,
  returnableSKMoney_gt?: Maybe<Scalars['Int']>,
  returnableSKMoney_gte?: Maybe<Scalars['Int']>,
  viewed?: Maybe<Scalars['Int']>,
  viewed_not?: Maybe<Scalars['Int']>,
  viewed_in?: Maybe<Array<Scalars['Int']>>,
  viewed_not_in?: Maybe<Array<Scalars['Int']>>,
  viewed_lt?: Maybe<Scalars['Int']>,
  viewed_lte?: Maybe<Scalars['Int']>,
  viewed_gt?: Maybe<Scalars['Int']>,
  viewed_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  deliveryWithin?: Maybe<Scalars['String']>,
  deliveryWithin_not?: Maybe<Scalars['String']>,
  deliveryWithin_in?: Maybe<Array<Scalars['String']>>,
  deliveryWithin_not_in?: Maybe<Array<Scalars['String']>>,
  deliveryWithin_lt?: Maybe<Scalars['String']>,
  deliveryWithin_lte?: Maybe<Scalars['String']>,
  deliveryWithin_gt?: Maybe<Scalars['String']>,
  deliveryWithin_gte?: Maybe<Scalars['String']>,
  deliveryWithin_contains?: Maybe<Scalars['String']>,
  deliveryWithin_not_contains?: Maybe<Scalars['String']>,
  deliveryWithin_starts_with?: Maybe<Scalars['String']>,
  deliveryWithin_not_starts_with?: Maybe<Scalars['String']>,
  deliveryWithin_ends_with?: Maybe<Scalars['String']>,
  deliveryWithin_not_ends_with?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  featured_not?: Maybe<Scalars['Boolean']>,
  isApproved?: Maybe<Scalars['Boolean']>,
  isApproved_not?: Maybe<Scalars['Boolean']>,
  available?: Maybe<Scalars['Boolean']>,
  available_not?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable?: Maybe<Scalars['Boolean']>,
  isSkMoneyUsable_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  dispatchDuration?: Maybe<Duration>,
  dispatchDuration_not?: Maybe<Duration>,
  dispatchDuration_in?: Maybe<Array<Duration>>,
  dispatchDuration_not_in?: Maybe<Array<Duration>>,
  deliveryDuration?: Maybe<Duration>,
  deliveryDuration_not?: Maybe<Duration>,
  deliveryDuration_in?: Maybe<Array<Duration>>,
  deliveryDuration_not_in?: Maybe<Array<Duration>>,
  seller?: Maybe<SellerWhereInput>,
  category?: Maybe<CategoryWhereInput>,
  subCategory?: Maybe<SubCategoryWhereInput>,
  tags_every?: Maybe<TagWhereInput>,
  tags_some?: Maybe<TagWhereInput>,
  tags_none?: Maybe<TagWhereInput>,
  variations_every?: Maybe<VariationWhereInput>,
  variations_some?: Maybe<VariationWhereInput>,
  variations_none?: Maybe<VariationWhereInput>,
  AND?: Maybe<Array<ProductWhereInput>>,
  OR?: Maybe<Array<ProductWhereInput>>,
  NOT?: Maybe<Array<ProductWhereInput>>,
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  totalOrders: Scalars['Int'],
  totalCategories: Scalars['Int'],
  totalSubCategories: Scalars['Int'],
  totalSellers: Scalars['Int'],
  totalUsers: Scalars['Int'],
  totalProducts: Scalars['Int'],
  totalFranchises: Scalars['Int'],
  totalCarousels: Scalars['Int'],
  adminFranchise?: Maybe<AdminFranchise>,
  adminFranchises: Array<Maybe<AdminFranchise>>,
  adminFranchisesConnection: AdminFranchiseConnection,
  adminFranchiseArea?: Maybe<AdminFranchiseArea>,
  adminFranchiseAreas: Array<Maybe<AdminFranchiseArea>>,
  adminFranchiseAreasConnection: AdminFranchiseAreaConnection,
  carousel?: Maybe<Carousel>,
  carousels: Array<Maybe<Carousel>>,
  carouselsConnection: CarouselConnection,
  cart?: Maybe<Cart>,
  carts: Array<Maybe<Cart>>,
  cartsConnection: CartConnection,
  category?: Maybe<Category>,
  categories: Array<Maybe<Category>>,
  categoriesConnection: CategoryConnection,
  comment?: Maybe<Comment>,
  comments: Array<Maybe<Comment>>,
  commentsConnection: CommentConnection,
  franchise?: Maybe<Franchise>,
  franchises: Array<Maybe<Franchise>>,
  franchisesConnection: FranchiseConnection,
  franchiseArea?: Maybe<FranchiseArea>,
  franchiseAreas: Array<Maybe<FranchiseArea>>,
  franchiseAreasConnection: FranchiseAreaConnection,
  latLngs: Array<Maybe<LatLng>>,
  latLngsConnection: LatLngConnection,
  location?: Maybe<Location>,
  locations: Array<Maybe<Location>>,
  locationsConnection: LocationConnection,
  order?: Maybe<Order>,
  orders: Array<Maybe<Order>>,
  ordersConnection: OrderConnection,
  paymentDetail?: Maybe<PaymentDetail>,
  paymentDetails: Array<Maybe<PaymentDetail>>,
  paymentDetailsConnection: PaymentDetailConnection,
  product?: Maybe<Product>,
  products: Array<Maybe<Product>>,
  productsConnection: ProductConnection,
  search?: Maybe<Search>,
  searches: Array<Maybe<Search>>,
  searchesConnection: SearchConnection,
  seller?: Maybe<Seller>,
  sellers: Array<Maybe<Seller>>,
  sellersConnection: SellerConnection,
  size?: Maybe<Size>,
  sizes: Array<Maybe<Size>>,
  sizesConnection: SizeConnection,
  subCategory?: Maybe<SubCategory>,
  subCategories: Array<Maybe<SubCategory>>,
  subCategoriesConnection: SubCategoryConnection,
  tag?: Maybe<Tag>,
  tags: Array<Maybe<Tag>>,
  tagsConnection: TagConnection,
  user?: Maybe<User>,
  users: Array<Maybe<User>>,
  usersConnection: UserConnection,
  variation?: Maybe<Variation>,
  variations: Array<Maybe<Variation>>,
  variationsConnection: VariationConnection,
  viewedProduct?: Maybe<ViewedProduct>,
  viewedProducts: Array<Maybe<ViewedProduct>>,
  viewedProductsConnection: ViewedProductConnection,
  node?: Maybe<Node>,
};


export type QueryTotalOrdersArgs = {
  where?: Maybe<OrderWhereInput>
};


export type QueryTotalCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>
};


export type QueryTotalSubCategoriesArgs = {
  where?: Maybe<SubCategoryWhereInput>
};


export type QueryTotalSellersArgs = {
  where?: Maybe<SellerWhereInput>
};


export type QueryTotalUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type QueryTotalProductsArgs = {
  where?: Maybe<ProductWhereInput>
};


export type QueryTotalFranchisesArgs = {
  where?: Maybe<FranchiseWhereInput>
};


export type QueryAdminFranchiseArgs = {
  where: AdminFranchiseWhereUniqueInput
};


export type QueryAdminFranchisesArgs = {
  where?: Maybe<AdminFranchiseWhereInput>,
  orderBy?: Maybe<AdminFranchiseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAdminFranchisesConnectionArgs = {
  where?: Maybe<AdminFranchiseWhereInput>,
  orderBy?: Maybe<AdminFranchiseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAdminFranchiseAreaArgs = {
  where: AdminFranchiseAreaWhereUniqueInput
};


export type QueryAdminFranchiseAreasArgs = {
  where?: Maybe<AdminFranchiseAreaWhereInput>,
  orderBy?: Maybe<AdminFranchiseAreaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAdminFranchiseAreasConnectionArgs = {
  where?: Maybe<AdminFranchiseAreaWhereInput>,
  orderBy?: Maybe<AdminFranchiseAreaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCarouselArgs = {
  where: CarouselWhereUniqueInput
};


export type QueryCarouselsArgs = {
  where?: Maybe<CarouselWhereInput>,
  orderBy?: Maybe<CarouselOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCarouselsConnectionArgs = {
  where?: Maybe<CarouselWhereInput>,
  orderBy?: Maybe<CarouselOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCartArgs = {
  where: CartWhereUniqueInput
};


export type QueryCartsArgs = {
  where?: Maybe<CartWhereInput>,
  orderBy?: Maybe<CartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCartsConnectionArgs = {
  where?: Maybe<CartWhereInput>,
  orderBy?: Maybe<CartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput
};


export type QueryCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>,
  orderBy?: Maybe<CategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCategoriesConnectionArgs = {
  where?: Maybe<CategoryWhereInput>,
  orderBy?: Maybe<CategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput
};


export type QueryCommentsArgs = {
  where?: Maybe<CommentWhereInput>,
  orderBy?: Maybe<CommentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCommentsConnectionArgs = {
  where?: Maybe<CommentWhereInput>,
  orderBy?: Maybe<CommentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFranchiseArgs = {
  where: FranchiseWhereUniqueInput
};


export type QueryFranchisesArgs = {
  where?: Maybe<FranchiseWhereInput>,
  orderBy?: Maybe<FranchiseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFranchisesConnectionArgs = {
  where?: Maybe<FranchiseWhereInput>,
  orderBy?: Maybe<FranchiseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFranchiseAreaArgs = {
  where: FranchiseAreaWhereUniqueInput
};


export type QueryFranchiseAreasArgs = {
  where?: Maybe<FranchiseAreaWhereInput>,
  orderBy?: Maybe<FranchiseAreaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFranchiseAreasConnectionArgs = {
  where?: Maybe<FranchiseAreaWhereInput>,
  orderBy?: Maybe<FranchiseAreaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLatLngsArgs = {
  where?: Maybe<LatLngWhereInput>,
  orderBy?: Maybe<LatLngOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLatLngsConnectionArgs = {
  where?: Maybe<LatLngWhereInput>,
  orderBy?: Maybe<LatLngOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput
};


export type QueryLocationsArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationsConnectionArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput
};


export type QueryOrdersArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOrdersConnectionArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaymentDetailArgs = {
  where: PaymentDetailWhereUniqueInput
};


export type QueryPaymentDetailsArgs = {
  where?: Maybe<PaymentDetailWhereInput>,
  orderBy?: Maybe<PaymentDetailOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaymentDetailsConnectionArgs = {
  where?: Maybe<PaymentDetailWhereInput>,
  orderBy?: Maybe<PaymentDetailOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProductsConnectionArgs = {
  where?: Maybe<ProductWhereInput>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySearchArgs = {
  where: SearchWhereUniqueInput
};


export type QuerySearchesArgs = {
  where?: Maybe<SearchWhereInput>,
  orderBy?: Maybe<SearchOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySearchesConnectionArgs = {
  where?: Maybe<SearchWhereInput>,
  orderBy?: Maybe<SearchOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySellerArgs = {
  where: SellerWhereUniqueInput
};


export type QuerySellersArgs = {
  where?: Maybe<SellerWhereInput>,
  orderBy?: Maybe<SellerOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySellersConnectionArgs = {
  where?: Maybe<SellerWhereInput>,
  orderBy?: Maybe<SellerOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySizeArgs = {
  where: SizeWhereUniqueInput
};


export type QuerySizesArgs = {
  where?: Maybe<SizeWhereInput>,
  orderBy?: Maybe<SizeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySizesConnectionArgs = {
  where?: Maybe<SizeWhereInput>,
  orderBy?: Maybe<SizeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySubCategoryArgs = {
  where: SubCategoryWhereUniqueInput
};


export type QuerySubCategoriesArgs = {
  where?: Maybe<SubCategoryWhereInput>,
  orderBy?: Maybe<SubCategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySubCategoriesConnectionArgs = {
  where?: Maybe<SubCategoryWhereInput>,
  orderBy?: Maybe<SubCategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput
};


export type QueryTagsArgs = {
  where?: Maybe<TagWhereInput>,
  orderBy?: Maybe<TagOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTagsConnectionArgs = {
  where?: Maybe<TagWhereInput>,
  orderBy?: Maybe<TagOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryVariationArgs = {
  where: VariationWhereUniqueInput
};


export type QueryVariationsArgs = {
  where?: Maybe<VariationWhereInput>,
  orderBy?: Maybe<VariationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryVariationsConnectionArgs = {
  where?: Maybe<VariationWhereInput>,
  orderBy?: Maybe<VariationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryViewedProductArgs = {
  where: ViewedProductWhereUniqueInput
};


export type QueryViewedProductsArgs = {
  where?: Maybe<ViewedProductWhereInput>,
  orderBy?: Maybe<ViewedProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryViewedProductsConnectionArgs = {
  where?: Maybe<ViewedProductWhereInput>,
  orderBy?: Maybe<ViewedProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Seller = 'SELLER',
  Franchise = 'FRANCHISE'
}

export enum Salary {
  F_10To_15K = 'F_10_TO_15K',
  F_15To_20K = 'F_15_TO_20K',
  F_20To_25K = 'F_20_TO_25K',
  F_25To_30K = 'F_25_TO_30K',
  F_30To_40K = 'F_30_TO_40K',
  F_40To_50K = 'F_40_TO_50K',
  MoreThan_50K = 'MORE_THAN_50K'
}

export type Search = {
   __typename?: 'Search',
  id: Scalars['ID'],
  user: User,
  text: Scalars['String'],
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type SearchConnection = {
   __typename?: 'SearchConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<SearchEdge>>,
  aggregate: AggregateSearch,
};

export type SearchCreateInput = {
  id?: Maybe<Scalars['ID']>,
  user: UserCreateOneInput,
  text: Scalars['String'],
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type SearchEdge = {
   __typename?: 'SearchEdge',
  node: Search,
  cursor: Scalars['String'],
};

export enum SearchOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SearchUpdateInput = {
  user?: Maybe<UserUpdateOneRequiredInput>,
  text?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type SearchUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
};

export type SearchWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  user?: Maybe<UserWhereInput>,
  text?: Maybe<Scalars['String']>,
  text_not?: Maybe<Scalars['String']>,
  text_in?: Maybe<Array<Scalars['String']>>,
  text_not_in?: Maybe<Array<Scalars['String']>>,
  text_lt?: Maybe<Scalars['String']>,
  text_lte?: Maybe<Scalars['String']>,
  text_gt?: Maybe<Scalars['String']>,
  text_gte?: Maybe<Scalars['String']>,
  text_contains?: Maybe<Scalars['String']>,
  text_not_contains?: Maybe<Scalars['String']>,
  text_starts_with?: Maybe<Scalars['String']>,
  text_not_starts_with?: Maybe<Scalars['String']>,
  text_ends_with?: Maybe<Scalars['String']>,
  text_not_ends_with?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  latitude_not?: Maybe<Scalars['String']>,
  latitude_in?: Maybe<Array<Scalars['String']>>,
  latitude_not_in?: Maybe<Array<Scalars['String']>>,
  latitude_lt?: Maybe<Scalars['String']>,
  latitude_lte?: Maybe<Scalars['String']>,
  latitude_gt?: Maybe<Scalars['String']>,
  latitude_gte?: Maybe<Scalars['String']>,
  latitude_contains?: Maybe<Scalars['String']>,
  latitude_not_contains?: Maybe<Scalars['String']>,
  latitude_starts_with?: Maybe<Scalars['String']>,
  latitude_not_starts_with?: Maybe<Scalars['String']>,
  latitude_ends_with?: Maybe<Scalars['String']>,
  latitude_not_ends_with?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
  longitude_not?: Maybe<Scalars['String']>,
  longitude_in?: Maybe<Array<Scalars['String']>>,
  longitude_not_in?: Maybe<Array<Scalars['String']>>,
  longitude_lt?: Maybe<Scalars['String']>,
  longitude_lte?: Maybe<Scalars['String']>,
  longitude_gt?: Maybe<Scalars['String']>,
  longitude_gte?: Maybe<Scalars['String']>,
  longitude_contains?: Maybe<Scalars['String']>,
  longitude_not_contains?: Maybe<Scalars['String']>,
  longitude_starts_with?: Maybe<Scalars['String']>,
  longitude_not_starts_with?: Maybe<Scalars['String']>,
  longitude_ends_with?: Maybe<Scalars['String']>,
  longitude_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<SearchWhereInput>>,
  OR?: Maybe<Array<SearchWhereInput>>,
  NOT?: Maybe<Array<SearchWhereInput>>,
};

export type SearchWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Seller = {
   __typename?: 'Seller',
  id: Scalars['ID'],
  isTrusted: Scalars['Boolean'],
  website?: Maybe<Scalars['String']>,
  shopName: Scalars['String'],
  landlineNumber: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  user: User,
  bankDetails?: Maybe<PaymentDetail>,
  shopLocation?: Maybe<Location>,
  products?: Maybe<Array<Product>>,
};


export type SellerProductsArgs = {
  where?: Maybe<ProductWhereInput>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type SellerConnection = {
   __typename?: 'SellerConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<SellerEdge>>,
  aggregate: AggregateSeller,
};

export type SellerCreateInput = {
  id?: Maybe<Scalars['ID']>,
  isTrusted?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  shopName: Scalars['String'],
  landlineNumber: Scalars['String'],
  user: UserCreateOneInput,
  bankDetails?: Maybe<PaymentDetailCreateOneInput>,
  shopLocation?: Maybe<LocationCreateOneInput>,
  products?: Maybe<ProductCreateManyWithoutSellerInput>,
};

export type SellerCreateOneWithoutProductsInput = {
  create?: Maybe<SellerCreateWithoutProductsInput>,
  connect?: Maybe<SellerWhereUniqueInput>,
};

export type SellerCreateWithoutProductsInput = {
  id?: Maybe<Scalars['ID']>,
  isTrusted?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  shopName: Scalars['String'],
  landlineNumber: Scalars['String'],
  user: UserCreateOneInput,
  bankDetails?: Maybe<PaymentDetailCreateOneInput>,
  shopLocation?: Maybe<LocationCreateOneInput>,
};

export type SellerEdge = {
   __typename?: 'SellerEdge',
  node: Seller,
  cursor: Scalars['String'],
};

export enum SellerOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsTrustedAsc = 'isTrusted_ASC',
  IsTrustedDesc = 'isTrusted_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  ShopNameAsc = 'shopName_ASC',
  ShopNameDesc = 'shopName_DESC',
  LandlineNumberAsc = 'landlineNumber_ASC',
  LandlineNumberDesc = 'landlineNumber_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SellerUpdateInput = {
  isTrusted?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  shopName?: Maybe<Scalars['String']>,
  landlineNumber?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  bankDetails?: Maybe<PaymentDetailUpdateOneInput>,
  shopLocation?: Maybe<LocationUpdateOneInput>,
  products?: Maybe<ProductUpdateManyWithoutSellerInput>,
};

export type SellerUpdateManyMutationInput = {
  isTrusted?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  shopName?: Maybe<Scalars['String']>,
  landlineNumber?: Maybe<Scalars['String']>,
};

export type SellerUpdateOneRequiredWithoutProductsInput = {
  create?: Maybe<SellerCreateWithoutProductsInput>,
  update?: Maybe<SellerUpdateWithoutProductsDataInput>,
  upsert?: Maybe<SellerUpsertWithoutProductsInput>,
  connect?: Maybe<SellerWhereUniqueInput>,
};

export type SellerUpdateWithoutProductsDataInput = {
  isTrusted?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  shopName?: Maybe<Scalars['String']>,
  landlineNumber?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  bankDetails?: Maybe<PaymentDetailUpdateOneInput>,
  shopLocation?: Maybe<LocationUpdateOneInput>,
};

export type SellerUpsertWithoutProductsInput = {
  update: SellerUpdateWithoutProductsDataInput,
  create: SellerCreateWithoutProductsInput,
};

export type SellerWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isTrusted?: Maybe<Scalars['Boolean']>,
  isTrusted_not?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  website_not?: Maybe<Scalars['String']>,
  website_in?: Maybe<Array<Scalars['String']>>,
  website_not_in?: Maybe<Array<Scalars['String']>>,
  website_lt?: Maybe<Scalars['String']>,
  website_lte?: Maybe<Scalars['String']>,
  website_gt?: Maybe<Scalars['String']>,
  website_gte?: Maybe<Scalars['String']>,
  website_contains?: Maybe<Scalars['String']>,
  website_not_contains?: Maybe<Scalars['String']>,
  website_starts_with?: Maybe<Scalars['String']>,
  website_not_starts_with?: Maybe<Scalars['String']>,
  website_ends_with?: Maybe<Scalars['String']>,
  website_not_ends_with?: Maybe<Scalars['String']>,
  shopName?: Maybe<Scalars['String']>,
  shopName_not?: Maybe<Scalars['String']>,
  shopName_in?: Maybe<Array<Scalars['String']>>,
  shopName_not_in?: Maybe<Array<Scalars['String']>>,
  shopName_lt?: Maybe<Scalars['String']>,
  shopName_lte?: Maybe<Scalars['String']>,
  shopName_gt?: Maybe<Scalars['String']>,
  shopName_gte?: Maybe<Scalars['String']>,
  shopName_contains?: Maybe<Scalars['String']>,
  shopName_not_contains?: Maybe<Scalars['String']>,
  shopName_starts_with?: Maybe<Scalars['String']>,
  shopName_not_starts_with?: Maybe<Scalars['String']>,
  shopName_ends_with?: Maybe<Scalars['String']>,
  shopName_not_ends_with?: Maybe<Scalars['String']>,
  landlineNumber?: Maybe<Scalars['String']>,
  landlineNumber_not?: Maybe<Scalars['String']>,
  landlineNumber_in?: Maybe<Array<Scalars['String']>>,
  landlineNumber_not_in?: Maybe<Array<Scalars['String']>>,
  landlineNumber_lt?: Maybe<Scalars['String']>,
  landlineNumber_lte?: Maybe<Scalars['String']>,
  landlineNumber_gt?: Maybe<Scalars['String']>,
  landlineNumber_gte?: Maybe<Scalars['String']>,
  landlineNumber_contains?: Maybe<Scalars['String']>,
  landlineNumber_not_contains?: Maybe<Scalars['String']>,
  landlineNumber_starts_with?: Maybe<Scalars['String']>,
  landlineNumber_not_starts_with?: Maybe<Scalars['String']>,
  landlineNumber_ends_with?: Maybe<Scalars['String']>,
  landlineNumber_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  user?: Maybe<UserWhereInput>,
  bankDetails?: Maybe<PaymentDetailWhereInput>,
  shopLocation?: Maybe<LocationWhereInput>,
  products_every?: Maybe<ProductWhereInput>,
  products_some?: Maybe<ProductWhereInput>,
  products_none?: Maybe<ProductWhereInput>,
  AND?: Maybe<Array<SellerWhereInput>>,
  OR?: Maybe<Array<SellerWhereInput>>,
  NOT?: Maybe<Array<SellerWhereInput>>,
};

export type SellerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Size = {
   __typename?: 'Size',
  id: Scalars['ID'],
  name: Sizes,
  quantity: Scalars['Int'],
};

export type SizeConnection = {
   __typename?: 'SizeConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<SizeEdge>>,
  aggregate: AggregateSize,
};

export type SizeCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Sizes,
  quantity?: Maybe<Scalars['Int']>,
};

export type SizeCreateManyInput = {
  create?: Maybe<Array<SizeCreateInput>>,
  connect?: Maybe<Array<SizeWhereUniqueInput>>,
};

export type SizeEdge = {
   __typename?: 'SizeEdge',
  node: Size,
  cursor: Scalars['String'],
};

export enum SizeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC'
}

export enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  Xl = 'XL',
  Xxl = 'XXL',
  Freesize = 'FREESIZE'
}

export type SizeScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Sizes>,
  name_not?: Maybe<Sizes>,
  name_in?: Maybe<Array<Sizes>>,
  name_not_in?: Maybe<Array<Sizes>>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<SizeScalarWhereInput>>,
  OR?: Maybe<Array<SizeScalarWhereInput>>,
  NOT?: Maybe<Array<SizeScalarWhereInput>>,
};

export type SizeUpdateDataInput = {
  name?: Maybe<Sizes>,
  quantity?: Maybe<Scalars['Int']>,
};

export type SizeUpdateInput = {
  name?: Maybe<Sizes>,
  quantity?: Maybe<Scalars['Int']>,
};

export type SizeUpdateManyDataInput = {
  name?: Maybe<Sizes>,
  quantity?: Maybe<Scalars['Int']>,
};

export type SizeUpdateManyInput = {
  create?: Maybe<Array<SizeCreateInput>>,
  update?: Maybe<Array<SizeUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<SizeUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<SizeWhereUniqueInput>>,
  connect?: Maybe<Array<SizeWhereUniqueInput>>,
  set?: Maybe<Array<SizeWhereUniqueInput>>,
  disconnect?: Maybe<Array<SizeWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SizeScalarWhereInput>>,
  updateMany?: Maybe<Array<SizeUpdateManyWithWhereNestedInput>>,
};

export type SizeUpdateManyMutationInput = {
  name?: Maybe<Sizes>,
  quantity?: Maybe<Scalars['Int']>,
};

export type SizeUpdateManyWithWhereNestedInput = {
  where: SizeScalarWhereInput,
  data: SizeUpdateManyDataInput,
};

export type SizeUpdateWithWhereUniqueNestedInput = {
  where: SizeWhereUniqueInput,
  data: SizeUpdateDataInput,
};

export type SizeUpsertWithWhereUniqueNestedInput = {
  where: SizeWhereUniqueInput,
  update: SizeUpdateDataInput,
  create: SizeCreateInput,
};

export type SizeWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Sizes>,
  name_not?: Maybe<Sizes>,
  name_in?: Maybe<Array<Sizes>>,
  name_not_in?: Maybe<Array<Sizes>>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<SizeWhereInput>>,
  OR?: Maybe<Array<SizeWhereInput>>,
  NOT?: Maybe<Array<SizeWhereInput>>,
};

export type SizeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum SoldBy {
  Admin = 'ADMIN',
  Franchise = 'FRANCHISE'
}

export type SubCategory = {
   __typename?: 'SubCategory',
  id: Scalars['ID'],
  name: Scalars['String'],
  image: Scalars['String'],
  category: Category,
  totalProducts: Scalars['Int'],
  franchiseCommissionPercent?: Maybe<Scalars['Int']>,
  customDuty?: Maybe<Scalars['Int']>,
  profitPercent?: Maybe<Scalars['Int']>,
};

export type SubCategoryConnection = {
   __typename?: 'SubCategoryConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<SubCategoryEdge>>,
  aggregate: AggregateSubCategory,
};

export type SubCategoryCreateInput = {
  id?: Maybe<Scalars['ID']>,
  image: Scalars['String'],
  name: Scalars['String'],
  franchiseCommissionPercent?: Maybe<Scalars['Int']>,
  customDuty?: Maybe<Scalars['Int']>,
  profitPercent?: Maybe<Scalars['Int']>,
  category: CategoryCreateOneInput,
};

export type SubCategoryCreateOneInput = {
  create?: Maybe<SubCategoryCreateInput>,
  connect?: Maybe<SubCategoryWhereUniqueInput>,
};

export type SubCategoryEdge = {
   __typename?: 'SubCategoryEdge',
  node: SubCategory,
  cursor: Scalars['String'],
};

export enum SubCategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FranchiseCommissionPercentAsc = 'franchiseCommissionPercent_ASC',
  FranchiseCommissionPercentDesc = 'franchiseCommissionPercent_DESC',
  CustomDutyAsc = 'customDuty_ASC',
  CustomDutyDesc = 'customDuty_DESC',
  ProfitPercentAsc = 'profitPercent_ASC',
  ProfitPercentDesc = 'profitPercent_DESC'
}

export type SubCategoryUpdateDataInput = {
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  franchiseCommissionPercent?: Maybe<Scalars['Int']>,
  customDuty?: Maybe<Scalars['Int']>,
  profitPercent?: Maybe<Scalars['Int']>,
  category?: Maybe<CategoryUpdateOneRequiredInput>,
};

export type SubCategoryUpdateInput = {
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  franchiseCommissionPercent?: Maybe<Scalars['Int']>,
  customDuty?: Maybe<Scalars['Int']>,
  profitPercent?: Maybe<Scalars['Int']>,
  category?: Maybe<CategoryUpdateOneRequiredInput>,
};

export type SubCategoryUpdateManyMutationInput = {
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  franchiseCommissionPercent?: Maybe<Scalars['Int']>,
  customDuty?: Maybe<Scalars['Int']>,
  profitPercent?: Maybe<Scalars['Int']>,
};

export type SubCategoryUpdateOneRequiredInput = {
  create?: Maybe<SubCategoryCreateInput>,
  update?: Maybe<SubCategoryUpdateDataInput>,
  upsert?: Maybe<SubCategoryUpsertNestedInput>,
  connect?: Maybe<SubCategoryWhereUniqueInput>,
};

export type SubCategoryUpsertNestedInput = {
  update: SubCategoryUpdateDataInput,
  create: SubCategoryCreateInput,
};

export type SubCategoryWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  franchiseCommissionPercent?: Maybe<Scalars['Int']>,
  franchiseCommissionPercent_not?: Maybe<Scalars['Int']>,
  franchiseCommissionPercent_in?: Maybe<Array<Scalars['Int']>>,
  franchiseCommissionPercent_not_in?: Maybe<Array<Scalars['Int']>>,
  franchiseCommissionPercent_lt?: Maybe<Scalars['Int']>,
  franchiseCommissionPercent_lte?: Maybe<Scalars['Int']>,
  franchiseCommissionPercent_gt?: Maybe<Scalars['Int']>,
  franchiseCommissionPercent_gte?: Maybe<Scalars['Int']>,
  customDuty?: Maybe<Scalars['Int']>,
  customDuty_not?: Maybe<Scalars['Int']>,
  customDuty_in?: Maybe<Array<Scalars['Int']>>,
  customDuty_not_in?: Maybe<Array<Scalars['Int']>>,
  customDuty_lt?: Maybe<Scalars['Int']>,
  customDuty_lte?: Maybe<Scalars['Int']>,
  customDuty_gt?: Maybe<Scalars['Int']>,
  customDuty_gte?: Maybe<Scalars['Int']>,
  profitPercent?: Maybe<Scalars['Int']>,
  profitPercent_not?: Maybe<Scalars['Int']>,
  profitPercent_in?: Maybe<Array<Scalars['Int']>>,
  profitPercent_not_in?: Maybe<Array<Scalars['Int']>>,
  profitPercent_lt?: Maybe<Scalars['Int']>,
  profitPercent_lte?: Maybe<Scalars['Int']>,
  profitPercent_gt?: Maybe<Scalars['Int']>,
  profitPercent_gte?: Maybe<Scalars['Int']>,
  category?: Maybe<CategoryWhereInput>,
  AND?: Maybe<Array<SubCategoryWhereInput>>,
  OR?: Maybe<Array<SubCategoryWhereInput>>,
  NOT?: Maybe<Array<SubCategoryWhereInput>>,
};

export type SubCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type Tag = {
   __typename?: 'Tag',
  id: Scalars['ID'],
  name: Scalars['String'],
  totalProducts: Scalars['Int'],
};

export type TagConnection = {
   __typename?: 'TagConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TagEdge>>,
  aggregate: AggregateTag,
};

export type TagCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  image: Scalars['String'],
};

export type TagCreateManyInput = {
  create?: Maybe<Array<TagCreateInput>>,
  connect?: Maybe<Array<TagWhereUniqueInput>>,
};

export type TagCreateOneInput = {
  create?: Maybe<TagCreateInput>,
  connect?: Maybe<TagWhereUniqueInput>,
};

export type TagEdge = {
   __typename?: 'TagEdge',
  node: Tag,
  cursor: Scalars['String'],
};

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TagScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<TagScalarWhereInput>>,
  OR?: Maybe<Array<TagScalarWhereInput>>,
  NOT?: Maybe<Array<TagScalarWhereInput>>,
};

export type TagUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

export type TagUpdateInput = {
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

export type TagUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

export type TagUpdateManyInput = {
  create?: Maybe<Array<TagCreateInput>>,
  update?: Maybe<Array<TagUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<TagWhereUniqueInput>>,
  connect?: Maybe<Array<TagWhereUniqueInput>>,
  set?: Maybe<Array<TagWhereUniqueInput>>,
  disconnect?: Maybe<Array<TagWhereUniqueInput>>,
  deleteMany?: Maybe<Array<TagScalarWhereInput>>,
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>,
};

export type TagUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

export type TagUpdateManyWithWhereNestedInput = {
  where: TagScalarWhereInput,
  data: TagUpdateManyDataInput,
};

export type TagUpdateOneRequiredInput = {
  create?: Maybe<TagCreateInput>,
  update?: Maybe<TagUpdateDataInput>,
  upsert?: Maybe<TagUpsertNestedInput>,
  connect?: Maybe<TagWhereUniqueInput>,
};

export type TagUpdateWithWhereUniqueNestedInput = {
  where: TagWhereUniqueInput,
  data: TagUpdateDataInput,
};

export type TagUpsertNestedInput = {
  update: TagUpdateDataInput,
  create: TagCreateInput,
};

export type TagUpsertWithWhereUniqueNestedInput = {
  where: TagWhereUniqueInput,
  update: TagUpdateDataInput,
  create: TagCreateInput,
};

export type TagWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<TagWhereInput>>,
  OR?: Maybe<Array<TagWhereInput>>,
  NOT?: Maybe<Array<TagWhereInput>>,
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  skMoney: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<Location>,
  defaultLocation?: Maybe<Location>,
  role: Role,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<User>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  cart?: Maybe<Array<Cart>>,
  orders?: Maybe<Array<Order>>,
  viewedProducts?: Maybe<Array<Product>>,
  referedUsers?: Maybe<Array<User>>,
};


export type UserCartArgs = {
  where?: Maybe<CartWhereInput>,
  orderBy?: Maybe<CartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserOrdersArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserViewedProductsArgs = {
  where?: Maybe<ProductWhereInput>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserReferedUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationCreateOneInput>,
  defaultLocation?: Maybe<LocationCreateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserCreateOneWithoutReferredByInput>,
  cart?: Maybe<CartCreateManyWithoutOrderByInput>,
  orders?: Maybe<OrderCreateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductCreateManyInput>,
  referedUsers?: Maybe<UserCreateManyWithoutReferedUsersInput>,
};

export type UserCreateManyWithoutReferedUsersInput = {
  create?: Maybe<Array<UserCreateWithoutReferedUsersInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutCartInput = {
  create?: Maybe<UserCreateWithoutCartInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutReferredByInput = {
  create?: Maybe<UserCreateWithoutReferredByInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>,
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationCreateOneInput>,
  defaultLocation?: Maybe<LocationCreateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserCreateOneWithoutReferredByInput>,
  orders?: Maybe<OrderCreateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductCreateManyInput>,
  referedUsers?: Maybe<UserCreateManyWithoutReferedUsersInput>,
};

export type UserCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['ID']>,
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationCreateOneInput>,
  defaultLocation?: Maybe<LocationCreateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserCreateOneWithoutReferredByInput>,
  cart?: Maybe<CartCreateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductCreateManyInput>,
  referedUsers?: Maybe<UserCreateManyWithoutReferedUsersInput>,
};

export type UserCreateWithoutReferedUsersInput = {
  id?: Maybe<Scalars['ID']>,
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationCreateOneInput>,
  defaultLocation?: Maybe<LocationCreateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserCreateOneWithoutReferredByInput>,
  cart?: Maybe<CartCreateManyWithoutOrderByInput>,
  orders?: Maybe<OrderCreateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductCreateManyInput>,
};

export type UserCreateWithoutReferredByInput = {
  id?: Maybe<Scalars['ID']>,
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationCreateOneInput>,
  defaultLocation?: Maybe<LocationCreateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  cart?: Maybe<CartCreateManyWithoutOrderByInput>,
  orders?: Maybe<OrderCreateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductCreateManyInput>,
  referedUsers?: Maybe<UserCreateManyWithoutReferedUsersInput>,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SkMoneyAsc = 'skMoney_ASC',
  SkMoneyDesc = 'skMoney_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  FcmTokenAsc = 'fcmToken_ASC',
  FcmTokenDesc = 'fcmToken_DESC',
  OtpAsc = 'otp_ASC',
  OtpDesc = 'otp_DESC',
  VerifiedAsc = 'verified_ASC',
  VerifiedDesc = 'verified_DESC',
  LastLoginAsc = 'lastLogin_ASC',
  LastLoginDesc = 'lastLogin_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  skMoney?: Maybe<Scalars['Int']>,
  skMoney_not?: Maybe<Scalars['Int']>,
  skMoney_in?: Maybe<Array<Scalars['Int']>>,
  skMoney_not_in?: Maybe<Array<Scalars['Int']>>,
  skMoney_lt?: Maybe<Scalars['Int']>,
  skMoney_lte?: Maybe<Scalars['Int']>,
  skMoney_gt?: Maybe<Scalars['Int']>,
  skMoney_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  country_not?: Maybe<Scalars['String']>,
  country_in?: Maybe<Array<Scalars['String']>>,
  country_not_in?: Maybe<Array<Scalars['String']>>,
  country_lt?: Maybe<Scalars['String']>,
  country_lte?: Maybe<Scalars['String']>,
  country_gt?: Maybe<Scalars['String']>,
  country_gte?: Maybe<Scalars['String']>,
  country_contains?: Maybe<Scalars['String']>,
  country_not_contains?: Maybe<Scalars['String']>,
  country_starts_with?: Maybe<Scalars['String']>,
  country_not_starts_with?: Maybe<Scalars['String']>,
  country_ends_with?: Maybe<Scalars['String']>,
  country_not_ends_with?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  phone_not?: Maybe<Scalars['String']>,
  phone_in?: Maybe<Array<Scalars['String']>>,
  phone_not_in?: Maybe<Array<Scalars['String']>>,
  phone_lt?: Maybe<Scalars['String']>,
  phone_lte?: Maybe<Scalars['String']>,
  phone_gt?: Maybe<Scalars['String']>,
  phone_gte?: Maybe<Scalars['String']>,
  phone_contains?: Maybe<Scalars['String']>,
  phone_not_contains?: Maybe<Scalars['String']>,
  phone_starts_with?: Maybe<Scalars['String']>,
  phone_not_starts_with?: Maybe<Scalars['String']>,
  phone_ends_with?: Maybe<Scalars['String']>,
  phone_not_ends_with?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  fcmToken_not?: Maybe<Scalars['String']>,
  fcmToken_in?: Maybe<Array<Scalars['String']>>,
  fcmToken_not_in?: Maybe<Array<Scalars['String']>>,
  fcmToken_lt?: Maybe<Scalars['String']>,
  fcmToken_lte?: Maybe<Scalars['String']>,
  fcmToken_gt?: Maybe<Scalars['String']>,
  fcmToken_gte?: Maybe<Scalars['String']>,
  fcmToken_contains?: Maybe<Scalars['String']>,
  fcmToken_not_contains?: Maybe<Scalars['String']>,
  fcmToken_starts_with?: Maybe<Scalars['String']>,
  fcmToken_not_starts_with?: Maybe<Scalars['String']>,
  fcmToken_ends_with?: Maybe<Scalars['String']>,
  fcmToken_not_ends_with?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  otp_not?: Maybe<Scalars['Int']>,
  otp_in?: Maybe<Array<Scalars['Int']>>,
  otp_not_in?: Maybe<Array<Scalars['Int']>>,
  otp_lt?: Maybe<Scalars['Int']>,
  otp_lte?: Maybe<Scalars['Int']>,
  otp_gt?: Maybe<Scalars['Int']>,
  otp_gte?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  verified_not?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  lastLogin_not?: Maybe<Scalars['DateTime']>,
  lastLogin_in?: Maybe<Array<Scalars['DateTime']>>,
  lastLogin_not_in?: Maybe<Array<Scalars['DateTime']>>,
  lastLogin_lt?: Maybe<Scalars['DateTime']>,
  lastLogin_lte?: Maybe<Scalars['DateTime']>,
  lastLogin_gt?: Maybe<Scalars['DateTime']>,
  lastLogin_gte?: Maybe<Scalars['DateTime']>,
  role?: Maybe<Role>,
  role_not?: Maybe<Role>,
  role_in?: Maybe<Array<Role>>,
  role_not_in?: Maybe<Array<Role>>,
  gender?: Maybe<Gender>,
  gender_not?: Maybe<Gender>,
  gender_in?: Maybe<Array<Gender>>,
  gender_not_in?: Maybe<Array<Gender>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<UserScalarWhereInput>>,
  OR?: Maybe<Array<UserScalarWhereInput>>,
  NOT?: Maybe<Array<UserScalarWhereInput>>,
};

export type UserUpdateDataInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationUpdateOneInput>,
  defaultLocation?: Maybe<LocationUpdateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserUpdateOneWithoutReferredByInput>,
  cart?: Maybe<CartUpdateManyWithoutOrderByInput>,
  orders?: Maybe<OrderUpdateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductUpdateManyInput>,
  referedUsers?: Maybe<UserUpdateManyWithoutReferedUsersInput>,
};

export type UserUpdateInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationUpdateOneInput>,
  defaultLocation?: Maybe<LocationUpdateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserUpdateOneWithoutReferredByInput>,
  cart?: Maybe<CartUpdateManyWithoutOrderByInput>,
  orders?: Maybe<OrderUpdateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductUpdateManyInput>,
  referedUsers?: Maybe<UserUpdateManyWithoutReferedUsersInput>,
};

export type UserUpdateManyDataInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
};

export type UserUpdateManyMutationInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
};

export type UserUpdateManyWithoutReferedUsersInput = {
  create?: Maybe<Array<UserCreateWithoutReferedUsersInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutReferedUsersInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutReferedUsersInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutCartInput = {
  create?: Maybe<UserCreateWithoutCartInput>,
  update?: Maybe<UserUpdateWithoutCartDataInput>,
  upsert?: Maybe<UserUpsertWithoutCartInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>,
  update?: Maybe<UserUpdateWithoutOrdersDataInput>,
  upsert?: Maybe<UserUpsertWithoutOrdersInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneWithoutReferredByInput = {
  create?: Maybe<UserCreateWithoutReferredByInput>,
  update?: Maybe<UserUpdateWithoutReferredByDataInput>,
  upsert?: Maybe<UserUpsertWithoutReferredByInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateWithoutCartDataInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationUpdateOneInput>,
  defaultLocation?: Maybe<LocationUpdateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserUpdateOneWithoutReferredByInput>,
  orders?: Maybe<OrderUpdateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductUpdateManyInput>,
  referedUsers?: Maybe<UserUpdateManyWithoutReferedUsersInput>,
};

export type UserUpdateWithoutOrdersDataInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationUpdateOneInput>,
  defaultLocation?: Maybe<LocationUpdateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserUpdateOneWithoutReferredByInput>,
  cart?: Maybe<CartUpdateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductUpdateManyInput>,
  referedUsers?: Maybe<UserUpdateManyWithoutReferedUsersInput>,
};

export type UserUpdateWithoutReferedUsersDataInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationUpdateOneInput>,
  defaultLocation?: Maybe<LocationUpdateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  referredBy?: Maybe<UserUpdateOneWithoutReferredByInput>,
  cart?: Maybe<CartUpdateManyWithoutOrderByInput>,
  orders?: Maybe<OrderUpdateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductUpdateManyInput>,
};

export type UserUpdateWithoutReferredByDataInput = {
  skMoney?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationUpdateOneInput>,
  defaultLocation?: Maybe<LocationUpdateOneInput>,
  role?: Maybe<Role>,
  gender?: Maybe<Gender>,
  cart?: Maybe<CartUpdateManyWithoutOrderByInput>,
  orders?: Maybe<OrderUpdateManyWithoutOrderByInput>,
  viewedProducts?: Maybe<ProductUpdateManyInput>,
  referedUsers?: Maybe<UserUpdateManyWithoutReferedUsersInput>,
};

export type UserUpdateWithWhereUniqueWithoutReferedUsersInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutReferedUsersDataInput,
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserUpsertWithoutCartInput = {
  update: UserUpdateWithoutCartDataInput,
  create: UserCreateWithoutCartInput,
};

export type UserUpsertWithoutOrdersInput = {
  update: UserUpdateWithoutOrdersDataInput,
  create: UserCreateWithoutOrdersInput,
};

export type UserUpsertWithoutReferredByInput = {
  update: UserUpdateWithoutReferredByDataInput,
  create: UserCreateWithoutReferredByInput,
};

export type UserUpsertWithWhereUniqueWithoutReferedUsersInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutReferedUsersDataInput,
  create: UserCreateWithoutReferedUsersInput,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  skMoney?: Maybe<Scalars['Int']>,
  skMoney_not?: Maybe<Scalars['Int']>,
  skMoney_in?: Maybe<Array<Scalars['Int']>>,
  skMoney_not_in?: Maybe<Array<Scalars['Int']>>,
  skMoney_lt?: Maybe<Scalars['Int']>,
  skMoney_lte?: Maybe<Scalars['Int']>,
  skMoney_gt?: Maybe<Scalars['Int']>,
  skMoney_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  country_not?: Maybe<Scalars['String']>,
  country_in?: Maybe<Array<Scalars['String']>>,
  country_not_in?: Maybe<Array<Scalars['String']>>,
  country_lt?: Maybe<Scalars['String']>,
  country_lte?: Maybe<Scalars['String']>,
  country_gt?: Maybe<Scalars['String']>,
  country_gte?: Maybe<Scalars['String']>,
  country_contains?: Maybe<Scalars['String']>,
  country_not_contains?: Maybe<Scalars['String']>,
  country_starts_with?: Maybe<Scalars['String']>,
  country_not_starts_with?: Maybe<Scalars['String']>,
  country_ends_with?: Maybe<Scalars['String']>,
  country_not_ends_with?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  phone_not?: Maybe<Scalars['String']>,
  phone_in?: Maybe<Array<Scalars['String']>>,
  phone_not_in?: Maybe<Array<Scalars['String']>>,
  phone_lt?: Maybe<Scalars['String']>,
  phone_lte?: Maybe<Scalars['String']>,
  phone_gt?: Maybe<Scalars['String']>,
  phone_gte?: Maybe<Scalars['String']>,
  phone_contains?: Maybe<Scalars['String']>,
  phone_not_contains?: Maybe<Scalars['String']>,
  phone_starts_with?: Maybe<Scalars['String']>,
  phone_not_starts_with?: Maybe<Scalars['String']>,
  phone_ends_with?: Maybe<Scalars['String']>,
  phone_not_ends_with?: Maybe<Scalars['String']>,
  fcmToken?: Maybe<Scalars['String']>,
  fcmToken_not?: Maybe<Scalars['String']>,
  fcmToken_in?: Maybe<Array<Scalars['String']>>,
  fcmToken_not_in?: Maybe<Array<Scalars['String']>>,
  fcmToken_lt?: Maybe<Scalars['String']>,
  fcmToken_lte?: Maybe<Scalars['String']>,
  fcmToken_gt?: Maybe<Scalars['String']>,
  fcmToken_gte?: Maybe<Scalars['String']>,
  fcmToken_contains?: Maybe<Scalars['String']>,
  fcmToken_not_contains?: Maybe<Scalars['String']>,
  fcmToken_starts_with?: Maybe<Scalars['String']>,
  fcmToken_not_starts_with?: Maybe<Scalars['String']>,
  fcmToken_ends_with?: Maybe<Scalars['String']>,
  fcmToken_not_ends_with?: Maybe<Scalars['String']>,
  otp?: Maybe<Scalars['Int']>,
  otp_not?: Maybe<Scalars['Int']>,
  otp_in?: Maybe<Array<Scalars['Int']>>,
  otp_not_in?: Maybe<Array<Scalars['Int']>>,
  otp_lt?: Maybe<Scalars['Int']>,
  otp_lte?: Maybe<Scalars['Int']>,
  otp_gt?: Maybe<Scalars['Int']>,
  otp_gte?: Maybe<Scalars['Int']>,
  verified?: Maybe<Scalars['Boolean']>,
  verified_not?: Maybe<Scalars['Boolean']>,
  lastLogin?: Maybe<Scalars['DateTime']>,
  lastLogin_not?: Maybe<Scalars['DateTime']>,
  lastLogin_in?: Maybe<Array<Scalars['DateTime']>>,
  lastLogin_not_in?: Maybe<Array<Scalars['DateTime']>>,
  lastLogin_lt?: Maybe<Scalars['DateTime']>,
  lastLogin_lte?: Maybe<Scalars['DateTime']>,
  lastLogin_gt?: Maybe<Scalars['DateTime']>,
  lastLogin_gte?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationWhereInput>,
  defaultLocation?: Maybe<LocationWhereInput>,
  role?: Maybe<Role>,
  role_not?: Maybe<Role>,
  role_in?: Maybe<Array<Role>>,
  role_not_in?: Maybe<Array<Role>>,
  gender?: Maybe<Gender>,
  gender_not?: Maybe<Gender>,
  gender_in?: Maybe<Array<Gender>>,
  gender_not_in?: Maybe<Array<Gender>>,
  referredBy?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  cart_every?: Maybe<CartWhereInput>,
  cart_some?: Maybe<CartWhereInput>,
  cart_none?: Maybe<CartWhereInput>,
  orders_every?: Maybe<OrderWhereInput>,
  orders_some?: Maybe<OrderWhereInput>,
  orders_none?: Maybe<OrderWhereInput>,
  viewedProducts_every?: Maybe<ProductWhereInput>,
  viewedProducts_some?: Maybe<ProductWhereInput>,
  viewedProducts_none?: Maybe<ProductWhereInput>,
  referedUsers_every?: Maybe<UserWhereInput>,
  referedUsers_some?: Maybe<UserWhereInput>,
  referedUsers_none?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  phone?: Maybe<Scalars['String']>,
};

export type Variation = {
   __typename?: 'Variation',
  id: Scalars['ID'],
  color: Scalars['String'],
  sizes?: Maybe<Array<Size>>,
  images: Array<Scalars['String']>,
};


export type VariationSizesArgs = {
  where?: Maybe<SizeWhereInput>,
  orderBy?: Maybe<SizeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type VariationConnection = {
   __typename?: 'VariationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<VariationEdge>>,
  aggregate: AggregateVariation,
};

export type VariationCreateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type VariationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  color: Scalars['String'],
  sizes?: Maybe<SizeCreateManyInput>,
  images?: Maybe<VariationCreateimagesInput>,
};

export type VariationCreateManyInput = {
  create?: Maybe<Array<VariationCreateInput>>,
  connect?: Maybe<Array<VariationWhereUniqueInput>>,
};

export type VariationEdge = {
   __typename?: 'VariationEdge',
  node: Variation,
  cursor: Scalars['String'],
};

export enum VariationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC'
}

export type VariationScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  color?: Maybe<Scalars['String']>,
  color_not?: Maybe<Scalars['String']>,
  color_in?: Maybe<Array<Scalars['String']>>,
  color_not_in?: Maybe<Array<Scalars['String']>>,
  color_lt?: Maybe<Scalars['String']>,
  color_lte?: Maybe<Scalars['String']>,
  color_gt?: Maybe<Scalars['String']>,
  color_gte?: Maybe<Scalars['String']>,
  color_contains?: Maybe<Scalars['String']>,
  color_not_contains?: Maybe<Scalars['String']>,
  color_starts_with?: Maybe<Scalars['String']>,
  color_not_starts_with?: Maybe<Scalars['String']>,
  color_ends_with?: Maybe<Scalars['String']>,
  color_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<VariationScalarWhereInput>>,
  OR?: Maybe<Array<VariationScalarWhereInput>>,
  NOT?: Maybe<Array<VariationScalarWhereInput>>,
};

export type VariationUpdateDataInput = {
  color?: Maybe<Scalars['String']>,
  sizes?: Maybe<SizeUpdateManyInput>,
  images?: Maybe<VariationUpdateimagesInput>,
};

export type VariationUpdateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type VariationUpdateInput = {
  color?: Maybe<Scalars['String']>,
  sizes?: Maybe<SizeUpdateManyInput>,
  images?: Maybe<VariationUpdateimagesInput>,
};

export type VariationUpdateManyDataInput = {
  color?: Maybe<Scalars['String']>,
  images?: Maybe<VariationUpdateimagesInput>,
};

export type VariationUpdateManyInput = {
  create?: Maybe<Array<VariationCreateInput>>,
  update?: Maybe<Array<VariationUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<VariationUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<VariationWhereUniqueInput>>,
  connect?: Maybe<Array<VariationWhereUniqueInput>>,
  set?: Maybe<Array<VariationWhereUniqueInput>>,
  disconnect?: Maybe<Array<VariationWhereUniqueInput>>,
  deleteMany?: Maybe<Array<VariationScalarWhereInput>>,
  updateMany?: Maybe<Array<VariationUpdateManyWithWhereNestedInput>>,
};

export type VariationUpdateManyMutationInput = {
  color?: Maybe<Scalars['String']>,
  images?: Maybe<VariationUpdateimagesInput>,
};

export type VariationUpdateManyWithWhereNestedInput = {
  where: VariationScalarWhereInput,
  data: VariationUpdateManyDataInput,
};

export type VariationUpdateWithWhereUniqueNestedInput = {
  where: VariationWhereUniqueInput,
  data: VariationUpdateDataInput,
};

export type VariationUpsertWithWhereUniqueNestedInput = {
  where: VariationWhereUniqueInput,
  update: VariationUpdateDataInput,
  create: VariationCreateInput,
};

export type VariationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  color?: Maybe<Scalars['String']>,
  color_not?: Maybe<Scalars['String']>,
  color_in?: Maybe<Array<Scalars['String']>>,
  color_not_in?: Maybe<Array<Scalars['String']>>,
  color_lt?: Maybe<Scalars['String']>,
  color_lte?: Maybe<Scalars['String']>,
  color_gt?: Maybe<Scalars['String']>,
  color_gte?: Maybe<Scalars['String']>,
  color_contains?: Maybe<Scalars['String']>,
  color_not_contains?: Maybe<Scalars['String']>,
  color_starts_with?: Maybe<Scalars['String']>,
  color_not_starts_with?: Maybe<Scalars['String']>,
  color_ends_with?: Maybe<Scalars['String']>,
  color_not_ends_with?: Maybe<Scalars['String']>,
  sizes_every?: Maybe<SizeWhereInput>,
  sizes_some?: Maybe<SizeWhereInput>,
  sizes_none?: Maybe<SizeWhereInput>,
  AND?: Maybe<Array<VariationWhereInput>>,
  OR?: Maybe<Array<VariationWhereInput>>,
  NOT?: Maybe<Array<VariationWhereInput>>,
};

export type VariationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ViewedProduct = {
   __typename?: 'ViewedProduct',
  id: Scalars['ID'],
  product: Product,
  viewedBy: User,
  location?: Maybe<Location>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type ViewedProductConnection = {
   __typename?: 'ViewedProductConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ViewedProductEdge>>,
  aggregate: AggregateViewedProduct,
};

export type ViewedProductCreateInput = {
  id?: Maybe<Scalars['ID']>,
  product: ProductCreateOneInput,
  viewedBy: UserCreateOneInput,
  location?: Maybe<LocationCreateOneInput>,
};

export type ViewedProductEdge = {
   __typename?: 'ViewedProductEdge',
  node: ViewedProduct,
  cursor: Scalars['String'],
};

export enum ViewedProductOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ViewedProductUpdateInput = {
  product?: Maybe<ProductUpdateOneRequiredInput>,
  viewedBy?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneInput>,
};

export type ViewedProductWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  product?: Maybe<ProductWhereInput>,
  viewedBy?: Maybe<UserWhereInput>,
  location?: Maybe<LocationWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ViewedProductWhereInput>>,
  OR?: Maybe<Array<ViewedProductWhereInput>>,
  NOT?: Maybe<Array<ViewedProductWhereInput>>,
};

export type ViewedProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum WorkExperience {
  NoExperience = 'NO_EXPERIENCE',
  LessThanOne = 'LESS_THAN_ONE',
  OneToTwo = 'ONE_TO_TWO',
  TwoToThree = 'TWO_TO_THREE',
  ThreeToFour = 'THREE_TO_FOUR',
  FourToFive = 'FOUR_TO_FIVE',
  MoreThanFive = 'MORE_THAN_FIVE'
}

export type AdminFranchiseAreasQueryVariables = {
  where: AdminFranchiseAreaWhereInput
};


export type AdminFranchiseAreasQuery = (
  { __typename?: 'Query' }
  & { adminFranchiseAreas: Array<Maybe<(
    { __typename?: 'AdminFranchiseArea' }
    & Pick<AdminFranchiseArea, 'id' | 'commonName'>
    & { adminFranchise: Maybe<(
      { __typename?: 'AdminFranchise' }
      & { franchise: Maybe<(
        { __typename?: 'Franchise' }
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'name' | 'phone'>
        ) }
      )> }
    )>, franchiseAreas: Maybe<Array<(
      { __typename?: 'FranchiseArea' }
      & Pick<FranchiseArea, 'commonName'>
      & { franchise: Maybe<(
        { __typename?: 'Franchise' }
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'name'>
        ) }
      )> }
    )>> }
  )>> }
);

export type AdminFranchiseAreaQueryVariables = {
  adminFranchiseAreaId: Scalars['ID']
};


export type AdminFranchiseAreaQuery = (
  { __typename?: 'Query' }
  & { adminFranchiseArea: Maybe<(
    { __typename?: 'AdminFranchiseArea' }
    & Pick<AdminFranchiseArea, 'id' | 'commonName'>
    & { adminFranchise: Maybe<(
      { __typename?: 'AdminFranchise' }
      & Pick<AdminFranchise, 'id'>
      & { franchise: Maybe<(
        { __typename?: 'Franchise' }
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'name' | 'email' | 'image' | 'phone'>
          & { location: Maybe<(
            { __typename?: 'Location' }
            & Pick<Location, 'city' | 'zipCode' | 'address1' | 'address2'>
          )> }
        ) }
      )> }
    )>, franchiseAreas: Maybe<Array<(
      { __typename?: 'FranchiseArea' }
      & Pick<FranchiseArea, 'id' | 'commonName'>
      & { franchise: Maybe<(
        { __typename?: 'Franchise' }
        & Pick<Franchise, 'id'>
        & { bankDetails: Maybe<(
          { __typename?: 'PaymentDetail' }
          & Pick<PaymentDetail, 'IFSC_CODE' | 'bankName' | 'accountNumber'>
        )>, user: (
          { __typename?: 'User' }
          & Pick<User, 'name' | 'email' | 'image' | 'phone'>
        ) }
      )> }
    )>> }
  )> }
);

export type FranchiseQueryVariables = {
  franchiseId: Scalars['ID']
};


export type FranchiseQuery = (
  { __typename?: 'Query' }
  & { franchise: Maybe<(
    { __typename?: 'Franchise' }
    & { bankDetails: Maybe<(
      { __typename?: 'PaymentDetail' }
      & Pick<PaymentDetail, 'IFSC_CODE' | 'bankName' | 'accountNumber'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'email' | 'image' | 'phone' | 'gender'>
      & { defaultLocation: Maybe<(
        { __typename?: 'Location' }
        & Pick<Location, 'city' | 'zipCode' | 'address1' | 'address2'>
      )> }
    ) }
  )> }
);

export type WithFranchiseOrdersQueryVariables = {
  withFranchiseId: Scalars['ID']
};


export type WithFranchiseOrdersQuery = (
  { __typename?: 'Query' }
  & { orders: Array<Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
    & { products: Maybe<Array<(
      { __typename?: 'Cart' }
      & Pick<Cart, 'totalProducts'>
      & { franchise: Maybe<(
        { __typename?: 'Franchise' }
        & Pick<Franchise, 'id'>
      )>, selectedVariations: Maybe<Array<(
        { __typename?: 'Variation' }
        & Pick<Variation, 'id' | 'images'>
        & { sizes: Maybe<Array<(
          { __typename?: 'Size' }
          & Pick<Size, 'id' | 'name' | 'quantity'>
        )>> }
      )>>, product: (
        { __typename?: 'Product' }
        & Pick<Product, 'price' | 'sellerPrice' | 'name' | 'image'>
        & { category: (
          { __typename?: 'Category' }
          & Pick<Category, 'name'>
        ), subCategory: (
          { __typename?: 'SubCategory' }
          & Pick<SubCategory, 'name' | 'franchiseCommissionPercent' | 'profitPercent'>
        ), seller: (
          { __typename?: 'Seller' }
          & Pick<Seller, 'shopName'>
        ) }
      ) }
    )>> }
  )>> }
);

export type CategoriesQueryVariables = {
  where?: Maybe<CategoryWhereInput>
};


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'image' | 'name' | 'totalProducts'>
  )>> }
);

export type ToggleCarouselShowMutationVariables = {
  show: Scalars['Boolean'],
  id: Scalars['ID']
};


export type ToggleCarouselShowMutation = (
  { __typename?: 'Mutation' }
  & { updateCarousel: Maybe<(
    { __typename?: 'Carousel' }
    & Pick<Carousel, 'show'>
  )> }
);

export type UsersQueryVariables = {
  where: UserWhereInput
};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'image' | 'country' | 'phone' | 'gender'>
    & { location: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'city' | 'zipCode' | 'address1' | 'address2'>
    )> }
  )>> }
);

export type UserQueryVariables = {
  userId: Scalars['ID']
};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'image' | 'country' | 'phone' | 'gender'>
    & { location: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'city' | 'zipCode' | 'address1' | 'address2'>
    )> }
  )> }
);

export type CartsQueryVariables = {
  where: CartWhereInput
};


export type CartsQuery = (
  { __typename?: 'Query' }
  & { carts: Array<Maybe<(
    { __typename?: 'Cart' }
    & Pick<Cart, 'id' | 'total' | 'totalProducts'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'image' | 'name' | 'price'>
    ), selectedVariations: Maybe<Array<(
      { __typename?: 'Variation' }
      & Pick<Variation, 'id' | 'color' | 'images'>
      & { sizes: Maybe<Array<(
        { __typename?: 'Size' }
        & Pick<Size, 'id' | 'name' | 'quantity'>
      )>> }
    )>> }
  )>> }
);

export type OrdersQueryVariables = {
  where: OrderWhereInput,
  orderBy?: Maybe<OrderOrderByInput>,
  first?: Maybe<Scalars['Int']>
};


export type OrdersQuery = (
  { __typename?: 'Query' }
  & { orders: Array<Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'status' | 'adminSeen' | 'createdAt' | 'total' | 'totalProducts'>
    & { orderBy: (
      { __typename?: 'User' }
      & Pick<User, 'gender' | 'image' | 'name' | 'createdAt'>
    ), products: Maybe<Array<(
      { __typename?: 'Cart' }
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'price'>
        & { subCategory: (
          { __typename?: 'SubCategory' }
          & Pick<SubCategory, 'profitPercent'>
        ) }
      ), selectedVariations: Maybe<Array<(
        { __typename?: 'Variation' }
        & { sizes: Maybe<Array<(
          { __typename?: 'Size' }
          & Pick<Size, 'quantity'>
        )>> }
      )>> }
    )>> }
  )>> }
);

export type OrderQueryVariables = {
  orderId: Scalars['ID']
};


export type OrderQuery = (
  { __typename?: 'Query' }
  & { order: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'status' | 'createdAt' | 'paymentMethod' | 'totalProducts' | 'total'>
    & { orderBy: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'email' | 'image' | 'country' | 'phone' | 'createdAt' | 'gender' | 'skMoney'>
    ), shippingAddress: (
      { __typename?: 'Location' }
      & Pick<Location, 'city' | 'zipCode' | 'address1' | 'address2'>
    ), products: Maybe<Array<(
      { __typename?: 'Cart' }
      & Pick<Cart, 'total'>
      & { franchise: Maybe<(
        { __typename?: 'Franchise' }
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'name'>
        ) }
      )>, product: (
        { __typename?: 'Product' }
        & Pick<Product, 'name' | 'price' | 'sellerPrice' | 'discountPercent'>
        & { subCategory: (
          { __typename?: 'SubCategory' }
          & Pick<SubCategory, 'name' | 'franchiseCommissionPercent' | 'profitPercent'>
        ), seller: (
          { __typename?: 'Seller' }
          & Pick<Seller, 'shopName'>
          & { shopLocation: Maybe<(
            { __typename?: 'Location' }
            & Pick<Location, 'city' | 'zipCode' | 'address1' | 'address2'>
          )> }
        ), variations: Array<(
          { __typename?: 'Variation' }
          & Pick<Variation, 'images'>
          & { sizes: Maybe<Array<(
            { __typename?: 'Size' }
            & Pick<Size, 'name' | 'quantity'>
          )>> }
        )> }
      ), selectedVariations: Maybe<Array<(
        { __typename?: 'Variation' }
        & Pick<Variation, 'color' | 'images'>
        & { sizes: Maybe<Array<(
          { __typename?: 'Size' }
          & Pick<Size, 'name' | 'quantity'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type ProductsQueryVariables = {
  term: Scalars['String']
};


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'sellerPrice' | 'isApproved' | 'discountPercent' | 'createdAt' | 'updatedAt' | 'description' | 'viewed'>
    & { variations: Array<(
      { __typename?: 'Variation' }
      & Pick<Variation, 'images'>
      & { sizes: Maybe<Array<(
        { __typename?: 'Size' }
        & Pick<Size, 'name' | 'quantity'>
      )>> }
    )>, category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ), subCategory: (
      { __typename?: 'SubCategory' }
      & Pick<SubCategory, 'id' | 'name' | 'franchiseCommissionPercent' | 'profitPercent'>
    ), seller: (
      { __typename?: 'Seller' }
      & Pick<Seller, 'shopName'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'name'>
      ) }
    ), tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )> }
  )>> }
);

export type ProductQueryVariables = {
  productId: Scalars['ID']
};


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'images' | 'sellerPrice' | 'discountPercent' | 'returnableSKMoney' | 'viewed' | 'description' | 'deliveryWithin' | 'isApproved' | 'featured' | 'available' | 'isSkMoneyUsable' | 'createdAt' | 'updatedAt' | 'dispatchDuration'>
    & { seller: (
      { __typename?: 'Seller' }
      & Pick<Seller, 'isTrusted' | 'website' | 'shopName' | 'landlineNumber'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'email' | 'phone'>
      ), bankDetails: Maybe<(
        { __typename?: 'PaymentDetail' }
        & Pick<PaymentDetail, 'IFSC_CODE' | 'bankName' | 'accountNumber'>
      )>, shopLocation: Maybe<(
        { __typename?: 'Location' }
        & Pick<Location, 'city' | 'zipCode' | 'address1' | 'address2'>
      )> }
    ), category: (
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    ), subCategory: (
      { __typename?: 'SubCategory' }
      & Pick<SubCategory, 'name' | 'franchiseCommissionPercent' | 'profitPercent'>
    ), tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'name'>
    )>, variations: Array<(
      { __typename?: 'Variation' }
      & Pick<Variation, 'color' | 'images'>
      & { sizes: Maybe<Array<(
        { __typename?: 'Size' }
        & Pick<Size, 'name' | 'quantity'>
      )>> }
    )> }
  )> }
);

export type SellersQueryVariables = {
  where: SellerWhereInput
};


export type SellersQuery = (
  { __typename?: 'Query' }
  & { sellers: Array<Maybe<(
    { __typename?: 'Seller' }
    & Pick<Seller, 'id' | 'shopName'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'phone' | 'image'>
      & { location: Maybe<(
        { __typename?: 'Location' }
        & Pick<Location, 'city' | 'address1' | 'zipCode'>
      )> }
    ), products: Maybe<Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'price'>
      & { variations: Array<(
        { __typename?: 'Variation' }
        & Pick<Variation, 'color' | 'images'>
        & { sizes: Maybe<Array<(
          { __typename?: 'Size' }
          & Pick<Size, 'name' | 'quantity'>
        )>> }
      )>, category: (
        { __typename?: 'Category' }
        & Pick<Category, 'name'>
      ), subCategory: (
        { __typename?: 'SubCategory' }
        & Pick<SubCategory, 'name'>
      ) }
    )>>, bankDetails: Maybe<(
      { __typename?: 'PaymentDetail' }
      & Pick<PaymentDetail, 'bankName' | 'accountNumber' | 'IFSC_CODE'>
    )> }
  )>> }
);

export type SellerQueryVariables = {
  id: Scalars['ID']
};


export type SellerQuery = (
  { __typename?: 'Query' }
  & { seller: Maybe<(
    { __typename?: 'Seller' }
    & Pick<Seller, 'id' | 'shopName' | 'website'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'phone' | 'image' | 'email' | 'gender'>
      & { location: Maybe<(
        { __typename?: 'Location' }
        & Pick<Location, 'city' | 'address1' | 'zipCode'>
      )> }
    ), products: Maybe<Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'price'>
      & { variations: Array<(
        { __typename?: 'Variation' }
        & Pick<Variation, 'color' | 'images'>
        & { sizes: Maybe<Array<(
          { __typename?: 'Size' }
          & Pick<Size, 'name' | 'quantity'>
        )>> }
      )>, category: (
        { __typename?: 'Category' }
        & Pick<Category, 'name'>
      ), subCategory: (
        { __typename?: 'SubCategory' }
        & Pick<SubCategory, 'name'>
      ) }
    )>>, bankDetails: Maybe<(
      { __typename?: 'PaymentDetail' }
      & Pick<PaymentDetail, 'bankName' | 'accountNumber' | 'IFSC_CODE'>
    )> }
  )> }
);

export type SellerProductsQueryVariables = {
  where: ProductWhereInput
};


export type SellerProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'sellerPrice'>
    & { variations: Array<(
      { __typename?: 'Variation' }
      & Pick<Variation, 'color' | 'images'>
      & { sizes: Maybe<Array<(
        { __typename?: 'Size' }
        & Pick<Size, 'name' | 'quantity'>
      )>> }
    )>, category: (
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    ), subCategory: (
      { __typename?: 'SubCategory' }
      & Pick<SubCategory, 'name'>
    ) }
  )>> }
);

export type SubCategoriesQueryVariables = {
  where?: Maybe<SubCategoryWhereInput>
};


export type SubCategoriesQuery = (
  { __typename?: 'Query' }
  & { subCategories: Array<Maybe<(
    { __typename?: 'SubCategory' }
    & Pick<SubCategory, 'id' | 'name' | 'image' | 'totalProducts' | 'franchiseCommissionPercent' | 'profitPercent'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    ) }
  )>> }
);


export const AdminFranchiseAreasDocument = gql`
    query AdminFranchiseAreas($where: AdminFranchiseAreaWhereInput!) {
  adminFranchiseAreas(where: $where) {
    id
    adminFranchise {
      franchise {
        user {
          name
          phone
        }
      }
    }
    commonName
    franchiseAreas {
      commonName
      franchise {
        user {
          name
        }
      }
    }
  }
}
    `;
export type AdminFranchiseAreasComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AdminFranchiseAreasQuery, AdminFranchiseAreasQueryVariables>, 'query'> & ({ variables: AdminFranchiseAreasQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AdminFranchiseAreasComponent = (props: AdminFranchiseAreasComponentProps) => (
      <ApolloReactComponents.Query<AdminFranchiseAreasQuery, AdminFranchiseAreasQueryVariables> query={AdminFranchiseAreasDocument} {...props} />
    );
    

/**
 * __useAdminFranchiseAreasQuery__
 *
 * To run a query within a React component, call `useAdminFranchiseAreasQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminFranchiseAreasQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminFranchiseAreasQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAdminFranchiseAreasQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AdminFranchiseAreasQuery, AdminFranchiseAreasQueryVariables>) {
        return ApolloReactHooks.useQuery<AdminFranchiseAreasQuery, AdminFranchiseAreasQueryVariables>(AdminFranchiseAreasDocument, baseOptions);
      }
export function useAdminFranchiseAreasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AdminFranchiseAreasQuery, AdminFranchiseAreasQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AdminFranchiseAreasQuery, AdminFranchiseAreasQueryVariables>(AdminFranchiseAreasDocument, baseOptions);
        }
export type AdminFranchiseAreasQueryHookResult = ReturnType<typeof useAdminFranchiseAreasQuery>;
export type AdminFranchiseAreasLazyQueryHookResult = ReturnType<typeof useAdminFranchiseAreasLazyQuery>;
export type AdminFranchiseAreasQueryResult = ApolloReactCommon.QueryResult<AdminFranchiseAreasQuery, AdminFranchiseAreasQueryVariables>;
export const AdminFranchiseAreaDocument = gql`
    query AdminFranchiseArea($adminFranchiseAreaId: ID!) {
  adminFranchiseArea(where: {id: $adminFranchiseAreaId}) {
    id
    commonName
    adminFranchise {
      id
      franchise {
        user {
          name
          email
          image
          phone
          location {
            city
            zipCode
            address1
            address2
          }
        }
      }
    }
    franchiseAreas {
      id
      commonName
      franchise {
        id
        bankDetails {
          IFSC_CODE
          bankName
          accountNumber
        }
        user {
          name
          email
          image
          phone
        }
      }
    }
  }
}
    `;
export type AdminFranchiseAreaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AdminFranchiseAreaQuery, AdminFranchiseAreaQueryVariables>, 'query'> & ({ variables: AdminFranchiseAreaQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AdminFranchiseAreaComponent = (props: AdminFranchiseAreaComponentProps) => (
      <ApolloReactComponents.Query<AdminFranchiseAreaQuery, AdminFranchiseAreaQueryVariables> query={AdminFranchiseAreaDocument} {...props} />
    );
    

/**
 * __useAdminFranchiseAreaQuery__
 *
 * To run a query within a React component, call `useAdminFranchiseAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminFranchiseAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminFranchiseAreaQuery({
 *   variables: {
 *      adminFranchiseAreaId: // value for 'adminFranchiseAreaId'
 *   },
 * });
 */
export function useAdminFranchiseAreaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AdminFranchiseAreaQuery, AdminFranchiseAreaQueryVariables>) {
        return ApolloReactHooks.useQuery<AdminFranchiseAreaQuery, AdminFranchiseAreaQueryVariables>(AdminFranchiseAreaDocument, baseOptions);
      }
export function useAdminFranchiseAreaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AdminFranchiseAreaQuery, AdminFranchiseAreaQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AdminFranchiseAreaQuery, AdminFranchiseAreaQueryVariables>(AdminFranchiseAreaDocument, baseOptions);
        }
export type AdminFranchiseAreaQueryHookResult = ReturnType<typeof useAdminFranchiseAreaQuery>;
export type AdminFranchiseAreaLazyQueryHookResult = ReturnType<typeof useAdminFranchiseAreaLazyQuery>;
export type AdminFranchiseAreaQueryResult = ApolloReactCommon.QueryResult<AdminFranchiseAreaQuery, AdminFranchiseAreaQueryVariables>;
export const FranchiseDocument = gql`
    query Franchise($franchiseId: ID!) {
  franchise(where: {id: $franchiseId}) {
    bankDetails {
      IFSC_CODE
      bankName
      accountNumber
    }
    user {
      name
      email
      image
      phone
      gender
      defaultLocation {
        city
        zipCode
        address1
        address2
      }
    }
  }
}
    `;
export type FranchiseComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FranchiseQuery, FranchiseQueryVariables>, 'query'> & ({ variables: FranchiseQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FranchiseComponent = (props: FranchiseComponentProps) => (
      <ApolloReactComponents.Query<FranchiseQuery, FranchiseQueryVariables> query={FranchiseDocument} {...props} />
    );
    

/**
 * __useFranchiseQuery__
 *
 * To run a query within a React component, call `useFranchiseQuery` and pass it any options that fit your needs.
 * When your component renders, `useFranchiseQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFranchiseQuery({
 *   variables: {
 *      franchiseId: // value for 'franchiseId'
 *   },
 * });
 */
export function useFranchiseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FranchiseQuery, FranchiseQueryVariables>) {
        return ApolloReactHooks.useQuery<FranchiseQuery, FranchiseQueryVariables>(FranchiseDocument, baseOptions);
      }
export function useFranchiseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FranchiseQuery, FranchiseQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FranchiseQuery, FranchiseQueryVariables>(FranchiseDocument, baseOptions);
        }
export type FranchiseQueryHookResult = ReturnType<typeof useFranchiseQuery>;
export type FranchiseLazyQueryHookResult = ReturnType<typeof useFranchiseLazyQuery>;
export type FranchiseQueryResult = ApolloReactCommon.QueryResult<FranchiseQuery, FranchiseQueryVariables>;
export const WithFranchiseOrdersDocument = gql`
    query WithFranchiseOrders($withFranchiseId: ID!) {
  orders(where: {products_some: {franchise: {id: $withFranchiseId}}}) {
    id
    products {
      franchise {
        id
      }
      totalProducts
      selectedVariations {
        id
        images
        sizes {
          id
          name
          quantity
        }
      }
      product {
        price
        sellerPrice
        name
        image
        category {
          name
        }
        subCategory {
          name
          franchiseCommissionPercent
          profitPercent
        }
        seller {
          shopName
        }
      }
    }
  }
}
    `;
export type WithFranchiseOrdersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<WithFranchiseOrdersQuery, WithFranchiseOrdersQueryVariables>, 'query'> & ({ variables: WithFranchiseOrdersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const WithFranchiseOrdersComponent = (props: WithFranchiseOrdersComponentProps) => (
      <ApolloReactComponents.Query<WithFranchiseOrdersQuery, WithFranchiseOrdersQueryVariables> query={WithFranchiseOrdersDocument} {...props} />
    );
    

/**
 * __useWithFranchiseOrdersQuery__
 *
 * To run a query within a React component, call `useWithFranchiseOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useWithFranchiseOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWithFranchiseOrdersQuery({
 *   variables: {
 *      withFranchiseId: // value for 'withFranchiseId'
 *   },
 * });
 */
export function useWithFranchiseOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WithFranchiseOrdersQuery, WithFranchiseOrdersQueryVariables>) {
        return ApolloReactHooks.useQuery<WithFranchiseOrdersQuery, WithFranchiseOrdersQueryVariables>(WithFranchiseOrdersDocument, baseOptions);
      }
export function useWithFranchiseOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WithFranchiseOrdersQuery, WithFranchiseOrdersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WithFranchiseOrdersQuery, WithFranchiseOrdersQueryVariables>(WithFranchiseOrdersDocument, baseOptions);
        }
export type WithFranchiseOrdersQueryHookResult = ReturnType<typeof useWithFranchiseOrdersQuery>;
export type WithFranchiseOrdersLazyQueryHookResult = ReturnType<typeof useWithFranchiseOrdersLazyQuery>;
export type WithFranchiseOrdersQueryResult = ApolloReactCommon.QueryResult<WithFranchiseOrdersQuery, WithFranchiseOrdersQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($where: CategoryWhereInput) {
  categories(where: $where) {
    id
    image
    name
    totalProducts
  }
}
    `;
export type CategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoriesQuery, CategoriesQueryVariables>, 'query'>;

    export const CategoriesComponent = (props: CategoriesComponentProps) => (
      <ApolloReactComponents.Query<CategoriesQuery, CategoriesQueryVariables> query={CategoriesDocument} {...props} />
    );
    

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
      }
export function useCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ToggleCarouselShowDocument = gql`
    mutation ToggleCarouselShow($show: Boolean!, $id: ID!) {
  updateCarousel(data: {show: $show}, where: {id: $id}) {
    show
  }
}
    `;
export type ToggleCarouselShowMutationFn = ApolloReactCommon.MutationFunction<ToggleCarouselShowMutation, ToggleCarouselShowMutationVariables>;
export type ToggleCarouselShowComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ToggleCarouselShowMutation, ToggleCarouselShowMutationVariables>, 'mutation'>;

    export const ToggleCarouselShowComponent = (props: ToggleCarouselShowComponentProps) => (
      <ApolloReactComponents.Mutation<ToggleCarouselShowMutation, ToggleCarouselShowMutationVariables> mutation={ToggleCarouselShowDocument} {...props} />
    );
    

/**
 * __useToggleCarouselShowMutation__
 *
 * To run a mutation, you first call `useToggleCarouselShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCarouselShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCarouselShowMutation, { data, loading, error }] = useToggleCarouselShowMutation({
 *   variables: {
 *      show: // value for 'show'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCarouselShowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleCarouselShowMutation, ToggleCarouselShowMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleCarouselShowMutation, ToggleCarouselShowMutationVariables>(ToggleCarouselShowDocument, baseOptions);
      }
export type ToggleCarouselShowMutationHookResult = ReturnType<typeof useToggleCarouselShowMutation>;
export type ToggleCarouselShowMutationResult = ApolloReactCommon.MutationResult<ToggleCarouselShowMutation>;
export type ToggleCarouselShowMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleCarouselShowMutation, ToggleCarouselShowMutationVariables>;
export const UsersDocument = gql`
    query Users($where: UserWhereInput!) {
  users(where: $where) {
    id
    name
    email
    image
    country
    phone
    location {
      city
      zipCode
      address1
      address2
    }
    gender
  }
}
    `;
export type UsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersQuery, UsersQueryVariables>, 'query'> & ({ variables: UsersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UsersComponent = (props: UsersComponentProps) => (
      <ApolloReactComponents.Query<UsersQuery, UsersQueryVariables> query={UsersDocument} {...props} />
    );
    

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = gql`
    query User($userId: ID!) {
  user(where: {id: $userId}) {
    id
    name
    email
    image
    country
    phone
    location {
      city
      zipCode
      address1
      address2
    }
    gender
  }
}
    `;
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );
    

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const CartsDocument = gql`
    query Carts($where: CartWhereInput!) {
  carts(where: $where) {
    id
    total
    totalProducts
    product {
      id
      image
      name
      price
    }
    selectedVariations {
      id
      color
      sizes {
        id
        name
        quantity
      }
      images
    }
  }
}
    `;
export type CartsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CartsQuery, CartsQueryVariables>, 'query'> & ({ variables: CartsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CartsComponent = (props: CartsComponentProps) => (
      <ApolloReactComponents.Query<CartsQuery, CartsQueryVariables> query={CartsDocument} {...props} />
    );
    

/**
 * __useCartsQuery__
 *
 * To run a query within a React component, call `useCartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCartsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CartsQuery, CartsQueryVariables>) {
        return ApolloReactHooks.useQuery<CartsQuery, CartsQueryVariables>(CartsDocument, baseOptions);
      }
export function useCartsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CartsQuery, CartsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CartsQuery, CartsQueryVariables>(CartsDocument, baseOptions);
        }
export type CartsQueryHookResult = ReturnType<typeof useCartsQuery>;
export type CartsLazyQueryHookResult = ReturnType<typeof useCartsLazyQuery>;
export type CartsQueryResult = ApolloReactCommon.QueryResult<CartsQuery, CartsQueryVariables>;
export const OrdersDocument = gql`
    query Orders($where: OrderWhereInput!, $orderBy: OrderOrderByInput = createdAt_DESC, $first: Int = 20) {
  orders(where: $where, orderBy: $orderBy, first: $first) {
    id
    status
    adminSeen
    createdAt
    orderBy {
      gender
      image
      name
      createdAt
    }
    total
    totalProducts
    products {
      product {
        price
        subCategory {
          profitPercent
        }
      }
      selectedVariations {
        sizes {
          quantity
        }
      }
    }
  }
}
    `;
export type OrdersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrdersQuery, OrdersQueryVariables>, 'query'> & ({ variables: OrdersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrdersComponent = (props: OrdersComponentProps) => (
      <ApolloReactComponents.Query<OrdersQuery, OrdersQueryVariables> query={OrdersDocument} {...props} />
    );
    

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        return ApolloReactHooks.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
      }
export function useOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = ApolloReactCommon.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const OrderDocument = gql`
    query Order($orderId: ID!) {
  order(where: {id: $orderId}) {
    id
    orderBy {
      name
      email
      image
      country
      phone
      createdAt
      gender
      skMoney
    }
    shippingAddress {
      city
      zipCode
      address1
      address2
    }
    status
    createdAt
    paymentMethod
    totalProducts
    total
    products {
      total
      franchise {
        user {
          name
        }
      }
      product {
        name
        price
        sellerPrice
        price
        discountPercent
        subCategory {
          name
          franchiseCommissionPercent
          profitPercent
        }
        seller {
          shopName
          shopLocation {
            city
            zipCode
            address1
            address2
          }
        }
        subCategory {
          name
        }
        variations {
          images
          sizes {
            name
            quantity
          }
        }
      }
      selectedVariations {
        color
        images
        sizes {
          name
          quantity
        }
      }
    }
  }
}
    `;
export type OrderComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrderQuery, OrderQueryVariables>, 'query'> & ({ variables: OrderQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrderComponent = (props: OrderComponentProps) => (
      <ApolloReactComponents.Query<OrderQuery, OrderQueryVariables> query={OrderDocument} {...props} />
    );
    

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useOrderQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        return ApolloReactHooks.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
      }
export function useOrderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = ApolloReactCommon.QueryResult<OrderQuery, OrderQueryVariables>;
export const ProductsDocument = gql`
    query Products($term: String!) {
  products(where: {name_contains: $term}) {
    id
    name
    price
    sellerPrice
    isApproved
    discountPercent
    createdAt
    updatedAt
    description
    viewed
    variations {
      sizes {
        name
        quantity
      }
      images
    }
    category {
      id
      name
    }
    subCategory {
      id
      name
      franchiseCommissionPercent
      profitPercent
    }
    seller {
      shopName
      user {
        name
      }
    }
    tags {
      id
      name
    }
  }
}
    `;
export type ProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductsQuery, ProductsQueryVariables>, 'query'> & ({ variables: ProductsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProductsComponent = (props: ProductsComponentProps) => (
      <ApolloReactComponents.Query<ProductsQuery, ProductsQueryVariables> query={ProductsDocument} {...props} />
    );
    

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      term: // value for 'term'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = ApolloReactCommon.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductDocument = gql`
    query Product($productId: ID!) {
  product(where: {id: $productId}) {
    id
    name
    price
    images
    sellerPrice
    discountPercent
    returnableSKMoney
    viewed
    description
    deliveryWithin
    isApproved
    featured
    available
    isSkMoneyUsable
    createdAt
    updatedAt
    dispatchDuration
    deliveryWithin
    dispatchDuration
    discountPercent
    seller {
      isTrusted
      website
      shopName
      landlineNumber
      user {
        id
        name
        email
        phone
      }
      bankDetails {
        IFSC_CODE
        bankName
        accountNumber
      }
      shopLocation {
        city
        zipCode
        address1
        address2
      }
    }
    category {
      name
    }
    subCategory {
      name
      franchiseCommissionPercent
      profitPercent
    }
    tags {
      name
    }
    variations {
      color
      sizes {
        name
        quantity
      }
      images
    }
  }
}
    `;
export type ProductComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductQuery, ProductQueryVariables>, 'query'> & ({ variables: ProductQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProductComponent = (props: ProductComponentProps) => (
      <ApolloReactComponents.Query<ProductQuery, ProductQueryVariables> query={ProductDocument} {...props} />
    );
    

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = ApolloReactCommon.QueryResult<ProductQuery, ProductQueryVariables>;
export const SellersDocument = gql`
    query Sellers($where: SellerWhereInput!) {
  sellers(where: $where) {
    id
    user {
      name
      phone
      image
      location {
        city
        address1
        zipCode
      }
    }
    products {
      id
      name
      price
      variations {
        color
        sizes {
          name
          quantity
        }
        images
      }
      category {
        name
      }
      subCategory {
        name
      }
    }
    shopName
    bankDetails {
      bankName
      accountNumber
      IFSC_CODE
    }
  }
}
    `;
export type SellersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SellersQuery, SellersQueryVariables>, 'query'> & ({ variables: SellersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SellersComponent = (props: SellersComponentProps) => (
      <ApolloReactComponents.Query<SellersQuery, SellersQueryVariables> query={SellersDocument} {...props} />
    );
    

/**
 * __useSellersQuery__
 *
 * To run a query within a React component, call `useSellersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSellersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SellersQuery, SellersQueryVariables>) {
        return ApolloReactHooks.useQuery<SellersQuery, SellersQueryVariables>(SellersDocument, baseOptions);
      }
export function useSellersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SellersQuery, SellersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SellersQuery, SellersQueryVariables>(SellersDocument, baseOptions);
        }
export type SellersQueryHookResult = ReturnType<typeof useSellersQuery>;
export type SellersLazyQueryHookResult = ReturnType<typeof useSellersLazyQuery>;
export type SellersQueryResult = ApolloReactCommon.QueryResult<SellersQuery, SellersQueryVariables>;
export const SellerDocument = gql`
    query Seller($id: ID!) {
  seller(where: {id: $id}) {
    id
    user {
      name
      phone
      image
      email
      gender
      location {
        city
        address1
        zipCode
      }
    }
    products {
      id
      name
      price
      variations {
        color
        sizes {
          name
          quantity
        }
        images
      }
      category {
        name
      }
      subCategory {
        name
      }
    }
    shopName
    website
    bankDetails {
      bankName
      accountNumber
      IFSC_CODE
    }
  }
}
    `;
export type SellerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SellerQuery, SellerQueryVariables>, 'query'> & ({ variables: SellerQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SellerComponent = (props: SellerComponentProps) => (
      <ApolloReactComponents.Query<SellerQuery, SellerQueryVariables> query={SellerDocument} {...props} />
    );
    

/**
 * __useSellerQuery__
 *
 * To run a query within a React component, call `useSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSellerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SellerQuery, SellerQueryVariables>) {
        return ApolloReactHooks.useQuery<SellerQuery, SellerQueryVariables>(SellerDocument, baseOptions);
      }
export function useSellerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SellerQuery, SellerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SellerQuery, SellerQueryVariables>(SellerDocument, baseOptions);
        }
export type SellerQueryHookResult = ReturnType<typeof useSellerQuery>;
export type SellerLazyQueryHookResult = ReturnType<typeof useSellerLazyQuery>;
export type SellerQueryResult = ApolloReactCommon.QueryResult<SellerQuery, SellerQueryVariables>;
export const SellerProductsDocument = gql`
    query sellerProducts($where: ProductWhereInput!) {
  products(where: $where, first: 20) {
    id
    name
    price
    sellerPrice
    variations {
      color
      sizes {
        name
        quantity
      }
      images
    }
    category {
      name
    }
    subCategory {
      name
    }
  }
}
    `;
export type SellerProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SellerProductsQuery, SellerProductsQueryVariables>, 'query'> & ({ variables: SellerProductsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SellerProductsComponent = (props: SellerProductsComponentProps) => (
      <ApolloReactComponents.Query<SellerProductsQuery, SellerProductsQueryVariables> query={SellerProductsDocument} {...props} />
    );
    

/**
 * __useSellerProductsQuery__
 *
 * To run a query within a React component, call `useSellerProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSellerProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SellerProductsQuery, SellerProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<SellerProductsQuery, SellerProductsQueryVariables>(SellerProductsDocument, baseOptions);
      }
export function useSellerProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SellerProductsQuery, SellerProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SellerProductsQuery, SellerProductsQueryVariables>(SellerProductsDocument, baseOptions);
        }
export type SellerProductsQueryHookResult = ReturnType<typeof useSellerProductsQuery>;
export type SellerProductsLazyQueryHookResult = ReturnType<typeof useSellerProductsLazyQuery>;
export type SellerProductsQueryResult = ApolloReactCommon.QueryResult<SellerProductsQuery, SellerProductsQueryVariables>;
export const SubCategoriesDocument = gql`
    query subCategories($where: SubCategoryWhereInput = {}) {
  subCategories(where: $where) {
    id
    name
    image
    totalProducts
    franchiseCommissionPercent
    profitPercent
    category {
      name
    }
  }
}
    `;
export type SubCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SubCategoriesQuery, SubCategoriesQueryVariables>, 'query'>;

    export const SubCategoriesComponent = (props: SubCategoriesComponentProps) => (
      <ApolloReactComponents.Query<SubCategoriesQuery, SubCategoriesQueryVariables> query={SubCategoriesDocument} {...props} />
    );
    

/**
 * __useSubCategoriesQuery__
 *
 * To run a query within a React component, call `useSubCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubCategoriesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSubCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SubCategoriesQuery, SubCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<SubCategoriesQuery, SubCategoriesQueryVariables>(SubCategoriesDocument, baseOptions);
      }
export function useSubCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SubCategoriesQuery, SubCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SubCategoriesQuery, SubCategoriesQueryVariables>(SubCategoriesDocument, baseOptions);
        }
export type SubCategoriesQueryHookResult = ReturnType<typeof useSubCategoriesQuery>;
export type SubCategoriesLazyQueryHookResult = ReturnType<typeof useSubCategoriesLazyQuery>;
export type SubCategoriesQueryResult = ApolloReactCommon.QueryResult<SubCategoriesQuery, SubCategoriesQueryVariables>;