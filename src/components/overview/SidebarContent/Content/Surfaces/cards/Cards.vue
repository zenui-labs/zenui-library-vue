<script setup>
import {ref} from "vue";

import Showcode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import {cardContents} from "@/Utils/ContentsConfig/SurfacesContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";

import TicketCard from "./cards-components/TicketCard.vue";
import BlogCard from "./cards-components/BlogCard.vue";
import ProductCard from "./cards-components/ProductCard.vue";
import MusicCard from "./cards-components/MusicCard.vue";
import SimpleProfileCard from "./cards-components/SimpleProfileCard.vue";
import ProfileCard from "./cards-components/ProfileCard.vue";
import TeamCard from "./cards-components/TeamCard.vue";
import PricingCard1 from "./cards-components/PricingCard1.vue";
import PricingCard2 from "./cards-components/PricingCard2.vue";
import RandomCard1 from "./cards-components/RandomCard1.vue";
import RandomCard2 from "./cards-components/RandomCard2.vue";
import RandomCard3 from "./cards-components/RandomCard3.vue";
import RandomCard4 from "./cards-components/RandomCard4.vue";
import RandomCard5 from "./cards-components/RandomCard5.vue";
import RandomCard6 from "./cards-components/RandomCard6.vue";
import RandomCard7 from "./cards-components/RandomCard7.vue";
import RandomCard8 from "./cards-components/RandomCard8.vue";
import RandomCard9 from "./cards-components/RandomCard9.vue";
import RandomCard10 from "./cards-components/RandomCard10.vue";
import RandomCard11 from "./cards-components/RandomCard11.vue";
import RandomCard12 from "./cards-components/RandomCard12.vue";
import RandomCard13 from "./cards-components/RandomCard13.vue";
import RandomCard14 from "./cards-components/RandomCard14.vue";

const ticketCardPreview = ref(true);
const ticketCardCode = ref(false);
const blogCardPreview = ref(true);
const blogCardCode = ref(false);
const productCardPreview = ref(true);
const productCardCode = ref(false);
const musicCardPreview = ref(true);
const musicCardCode = ref(false);
const simpleProfileCardPreview = ref(true);
const simpleProfileCardCode = ref(false);
const profileCardPreview = ref(true);
const profileCardCode = ref(false);
const teamCardPreview = ref(true);
const teamCardCode = ref(false);
const pricingCardPreview = ref(true);
const pricingCardCode = ref(false);
const pricingCard2Preview = ref(true);
const pricingCard2Code = ref(false);
const randomCardPreview1 = ref(true);
const randomCardCode1 = ref(false);
const randomCardPreview2 = ref(true);
const randomCardCode2 = ref(false);
const randomCardPreview3 = ref(true);
const randomCardCode3 = ref(false);
const randomCardPreview4 = ref(true);
const randomCardCode4 = ref(false);
const randomCardPreview5 = ref(true);
const randomCardCode5 = ref(false);
const randomCardPreview6 = ref(true);
const randomCardCode6 = ref(false);
const randomCardPreview7 = ref(true);
const randomCardCode7 = ref(false);
const randomCardPreview8 = ref(true);
const randomCardCode8 = ref(false);
const randomCardPreview9 = ref(true);
const randomCardCode9 = ref(false);
const randomCardPreview10 = ref(true);
const randomCardCode10 = ref(false);
const randomCardPreview11 = ref(true);
const randomCardCode11 = ref(false);
const randomCardPreview12 = ref(true);
const randomCardCode12 = ref(false);
const randomCardPreview13 = ref(true);
const randomCardCode13 = ref(false);
const randomCardPreview14 = ref(true);
const randomCardCode14 = ref(false);

const sectionIds = cardContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full 425px:w-[80%]">
      <ContentHeader id="ticket_card" text="ticket Card"/>
      <ComponentDescription
          text="A compact card displaying essential ticket information such as title, location, and due date for quick reference."
      />
      <ToggleTab
          :code="ticketCardCode"
          @update:code="(val) => (ticketCardCode = val)"
          :preview="ticketCardPreview"
          @update:preview="(val) => (ticketCardPreview = val)"
      />
      <ComponentWrapper>
        <TicketCard v-if="ticketCardPreview"/>
        <Showcode v-if="ticketCardCode" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="Blog_Card" text="Blog Card"/>
      </div>
      <ComponentDescription
          text="This is a blog card with icon and dropdown component. Explore content with icons and interactive dropdowns for seamless navigation."
      />
      <ToggleTab
          :code="blogCardCode"
          @update:code="(val) => (blogCardCode = val)"
          :preview="blogCardPreview"
          @update:preview="(val) => (blogCardPreview = val)"
      />
      <ComponentWrapper>
        <BlogCard v-if="blogCardPreview"/>
        <Showcode v-if="blogCardCode" code=""/>
      </ComponentWrapper>

      <ContentHeader id="product_card" class="mt-8" text="Product Card"/>
      <ComponentDescription
          text="This is a product card with icon and add to cart button. Browse products and add them to your cart effortlessly."
      />
      <ToggleTab
          :code="productCardCode"
          @update:code="(val) => (productCardCode = val)"
          :preview="productCardPreview"
          @update:preview="(val) => (productCardPreview = val)"
      />
      <ComponentWrapper>
        <ProductCard v-if="productCardPreview"/>
        <Showcode v-if="productCardCode" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="music_card" text="Music Card"/>
      </div>
      <ComponentDescription
          text="This is a music card component. Explore tracks, albums, and artists with ease and convenience."
      />
      <ToggleTab
          :code="musicCardCode"
          @update:code="(val) => (musicCardCode = val)"
          :preview="musicCardPreview"
          @update:preview="(val) => (musicCardPreview = val)"
      />
      <ComponentWrapper>
        <MusicCard v-if="musicCardPreview"/>
        <Showcode v-if="musicCardCode" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="profile_card_2" text="Simple profile card"/>
      </div>
      <ComponentDescription
          text="This is a profile card with statistics component. View detailed insights and information about profiles seamlessly."
      />
      <ToggleTab
          :code="simpleProfileCardCode"
          @update:code="(val) => (simpleProfileCardCode = val)"
          @update:preview="(val) => (simpleProfileCardPreview = val)"
          :preview="simpleProfileCardPreview"
      />
      <ComponentWrapper>
        <SimpleProfileCard v-if="simpleProfileCardPreview"/>
        <Showcode v-if="simpleProfileCardCode" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="profile_card" text="profile card"/>
      </div>
      <ComponentDescription
          text="This is a profile card displaying followers, posts, and likes. Explore engagement metrics effortlessly."
      />
      <ToggleTab
          :code="profileCardCode"
          @update:code="(val) => (profileCardCode = val)"
          @update:preview="(val) => (profileCardPreview = val)"
          :preview="profileCardPreview"
      />
      <ComponentWrapper>
        <ProfileCard v-if="profileCardPreview"/>
        <Showcode v-if="profileCardCode" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="Team_card" text="Team card"/>
      </div>
      <ComponentDescription
          text="This is a team member card with elegant alignment. View team details with stylish presentation."
      />
      <ToggleTab
          :code="teamCardCode"
          @update:code="(val) => (teamCardCode = val)"
          @update:preview="(val) => (teamCardPreview = val)"
          :preview="teamCardPreview"
      />
      <ComponentWrapper>
        <TeamCard v-if="teamCardPreview"/>
        <Showcode v-if="teamCardCode" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="Pricing_card_1" text="Pricing card 1"/>
      </div>
      <ComponentDescription
          text="This is a pricing card with highlighted points. Compare plans with clear, marked features for easy selection."
      />
      <ToggleTab
          :code="pricingCardCode"
          @update:code="(val) => (pricingCardCode = val)"
          @update:preview="(val) => (pricingCardPreview = val)"
          :preview="pricingCardPreview"
      />
      <ComponentWrapper>
        <PricingCard1 v-if="pricingCardPreview"/>
        <Showcode v-if="pricingCardCode" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="Pricing_card_2" text="Pricing card 2"/>
      </div>
      <ComponentDescription
          text="This is a pricing card with check and cross icons for feature comparison. Easily assess options with clear indicators."
      />
      <ToggleTab
          :code="pricingCard2Code"
          :preview="pricingCard2Preview"
          @update:preview="(val) => (pricingCard2Preview = val)"
          @update:code="(val) => (pricingCard2Code = val)"
      />
      <ComponentWrapper>
        <PricingCard2 v-if="pricingCard2Preview"/>
        <Showcode v-if="pricingCard2Code" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_1" text="random card 1"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode1"
          :preview="randomCardPreview1"
          @update:preview="(val) => (randomCardPreview1 = val)"
          @update:code="(val) => (randomCardCode1 = val)"
      />
      <ComponentWrapper>
        <RandomCard1 v-if="randomCardPreview1"/>
        <Showcode v-if="randomCardCode1" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_2" text="random card 2"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode2"
          :preview="randomCardPreview2"
          @update:preview="(val) => (randomCardPreview2 = val)"
          @update:code="(val) => (randomCardCode2 = val)"
      />
      <ComponentWrapper>
        <RandomCard2 v-if="randomCardPreview2"/>
        <Showcode v-if="randomCardCode2" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_3" text="random card 3"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode3"
          :preview="randomCardPreview3"
          @update:preview="(val) => (randomCardPreview3 = val)"
          @update:code="(val) => (randomCardCode3 = val)"
      />

      <ComponentWrapper>
        <RandomCard3 v-if="randomCardPreview3"/>
        <Showcode
            v-if="randomCardCode3"
            code='import RandomCard3 from "./RandomCard3";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_4" text="random card 4"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode4"
          @update:code="(val) => (randomCardCode4 = val)"
          @update:preview="(val) => (randomCardPreview4 = val)"
          :preview="randomCardPreview4"
      />
      <ComponentWrapper>
        <RandomCard4 v-if="randomCardPreview4"/>
        <Showcode v-if="randomCardCode4" code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_5" text="random card 5"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode5"
          :preview="randomCardPreview5"
          @update:code="(val) => (randomCardCode5 = val)"
          @update:preview="(val) => (randomCardPreview5 = val)"
      />
      <ComponentWrapper>
        <RandomCard5 v-if="randomCardPreview5"/>
        <Showcode
            v-if="randomCardCode5"
            code='import RandomCard5 from "./RandomCard5";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_6" text="random card 6"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode6"
          :preview="randomCardPreview6"
          @update:code="(val) => (randomCardCode6 = val)"
          @update:preview="(val) => (randomCardPreview6 = val)"
      />
      <ComponentWrapper>
        <RandomCard6 v-if="randomCardPreview6"/>
        <Showcode
            v-if="randomCardCode6"
            code='import RandomCard6 from "./RandomCard6";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_7" text="random card 7"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode7"
          :preview="randomCardPreview7"
          @update:code="(val) => (randomCardCode7 = val)"
          @update:preview="(val) => (randomCardPreview7 = val)"
      />

      />
      <ComponentWrapper>
        <RandomCard7 v-if="randomCardPreview7"/>
        <Showcode
            v-if="randomCardCode7"
            code='import RandomCard7 from "./RandomCard7";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_8" text="random card 8"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode8"
          :preview="randomCardPreview8"
          @update:code="(val) => (randomCardCode8 = val)"
          @update:preview="(val) => (randomCardPreview8 = val)"
      />

      <ComponentWrapper>
        <RandomCard8 v-if="randomCardPreview8"/>
        <Showcode
            v-if="randomCardCode8"
            code='import RandomCard8 from "./RandomCard8";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_9" text="random card 9"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode9"
          :preview="randomCardPreview9"
          @update:code="(val) => (randomCardCode9 = val)"
          @update:preview="(val) => (randomCardPreview9 = val)"
      />

      <ComponentWrapper>
        <RandomCard9 v-if="randomCardPreview9"/>
        <Showcode
            v-if="randomCardCode9"
            code='import RandomCard9 from "./RandomCard9";'
        />
      </ComponentWrapper>

      <ComponentWrapper>
        <RandomCard9 v-if="randomCardPreview9"/>
        <Showcode
            v-if="randomCardCode9"
            code='import RandomCard9 from "./RandomCard9";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_10" text="random card 10"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode10"
          :preview="randomCardPreview10"
          @update:code="(val) => (randomCardCode10 = val)"
          @update:preview="(val) => (randomCardPreview10 = val)"
      />
      <ComponentWrapper>
        <RandomCard10 v-if="randomCardPreview10"/>
        <Showcode
            v-if="randomCardCode10"
            code='import RandomCard10 from "./RandomCard10";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_11" text="random card 11"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode11"
          :preview="randomCardPreview11"
          @update:code="(val) => (randomCardCode11 = val)"
          @update:preview="(val) => (randomCardPreview11 = val)"
      />

      <ComponentWrapper>
        <RandomCard11 v-if="randomCardPreview11"/>
        <Showcode
            v-if="randomCardCode11"
            code='import RandomCard11 from "./RandomCard11";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_12" text="random card 12"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode12"
          :preview="randomCardPreview12"
          @update:code="(val) => (randomCardCode12 = val)"
          @update:preview="(val) => (randomCardPreview12 = val)"
      />

      <ComponentWrapper>
        <RandomCard12 v-if="randomCardPreview12"/>
        <Showcode
            v-if="randomCardCode12"
            code='import RandomCard12 from "./RandomCard12";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_13" text="random card 13"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode13"
          :preview="randomCardPreview13"
          @update:code="(val) => (randomCardCode13 = val)"
          @update:preview="(val) => (randomCardPreview13 = val)"
      />

      <ComponentWrapper>
        <RandomCard13 v-if="randomCardPreview13"/>
        <Showcode
            v-if="randomCardCode13"
            code='import RandomCard13 from "./RandomCard13";'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="random_card_14" text="random card 14"/>
      </div>
      <ComponentDescription
          text="A container for displaying content and actions on a single topic, often used for organizing information into sections."
      />
      <ToggleTab
          :code="randomCardCode14"
          :preview="randomCardPreview14"
          @update:code="(val) => (randomCardCode14 = val)"
          @update:preview="(val) => (randomCardPreview14 = val)"
      />
      <ComponentWrapper>
        <RandomCard14 v-if="randomCardPreview14"/>
        <Showcode
            v-if="randomCardCode14"
            code='import RandomCard14 from "./RandomCard14";'
        />
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/comparison-card"
          backName="Comparison Card"
          forwardName="animated cards"
          forwardUrl="/components/animated-cards"
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="cardContents"/>
  </aside>
</template>
