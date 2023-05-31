import React from "react";
import {
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { useStore } from "../store";
import Item from "../components/ItemCmp";

const Home = () => {
  const { items, user } = useStore();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-40 md:gap-56 py-8">
        <h4 className="text-5xl md:text-[60px] font-black text-center">
          Rent Motos In Tbilisi!
        </h4>
        <div className="flex gap-2 flex-wrap justify-center">
          <button className="hero-btn">
            <ChatBubbleOvalLeftIcon /> Whatsapp
          </button>
          <button className="hero-btn">
            <ChatBubbleLeftIcon />
            Facebook
          </button>
        </div>
      </div>

      {new Array(4).fill('').map((_, i) => (
        <div key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
          eros facilisis, sagittis ligula ac, volutpat neque. Aliquam erat
          volutpat. Sed semper sem vitae orci mattis, at ultrices elit aliquet.
          Nullam bibendum sapien sit amet quam finibus, in semper eros luctus.
          Nulla malesuada ligula ut risus volutpat, eget rutrum ex imperdiet.
          Integer vitae enim tristique, placerat justo quis, fringilla purus.
          Curabitur ullamcorper metus eu erat mollis, eget tempor odio semper.
          Suspendisse faucibus leo quis venenatis imperdiet. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Fusce lorem enim, mollis quis mattis ut, gravida sed urna.
          Praesent in tellus feugiat, varius nunc et, viverra nulla. Sed
          bibendum, erat consequat sollicitudin ullamcorper, enim leo varius
          tortor, id dapibus nisl elit vel leo. Pellentesque nec ligula commodo,
          cursus est vel, laoreet justo. Pellentesque pulvinar odio ac
          ullamcorper vulputate. Maecenas ac lacus purus. Nullam vel sapien
          dolor. Sed tempor magna risus, et ornare urna iaculis at. In sed ex ac
          enim fermentum interdum. Praesent vel luctus diam. Quisque ut interdum
          orci. Sed auctor feugiat lectus, ac ullamcorper massa pellentesque sit
          amet. In hendrerit quam tristique auctor venenatis. In a tempor ante.
          Donec id massa enim. Quisque ac mauris id massa pharetra laoreet at et
          lorem. Ut dignissim nisl vel ante dictum tempus. Nulla dui metus,
          lacinia ut volutpat at, ultrices ut ligula. Aenean faucibus arcu ac
          erat eleifend finibus. Morbi vitae egestas erat. Sed iaculis ut justo
          et scelerisque. Pellentesque nec ante sed sapien feugiat egestas.
          Donec aliquet dui id dolor molestie, eget venenatis tortor bibendum.
          Sed vitae gravida dui. Donec vel bibendum ligula, interdum dignissim
          eros. Sed mattis, lorem in suscipit lacinia, massa ex porta metus, nec
          tempor sem risus vitae sapien. Aenean molestie, turpis nec ullamcorper
          luctus, ex erat aliquet leo, quis luctus nibh neque eu metus. Fusce
          tincidunt iaculis leo in ultricies. Quisque sit amet urna at nulla
          rutrum auctor. Cras non odio tempor, feugiat lectus sit amet, ornare
          sem. Sed ultricies neque ut bibendum tempus. Praesent eu neque libero.
          Maecenas blandit, sem eget interdum porta, sapien dui sollicitudin
          arcu, in imperdiet nulla nisi at mi. Etiam ullamcorper varius justo,
          in imperdiet ligula interdum quis. Donec efficitur rhoncus lectus, at
          hendrerit nibh mattis eget. Vivamus a dapibus diam. Etiam nec posuere
          nibh, quis luctus tellus. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Nullam vitae
          massa nulla.
        </div>
      ))}

      <div className="flex flex-col mt-12 md:mt-14 py-8">
        <h4 className="section-title">Available Motos</h4>
        <div className="items">
          {items.map((item, idx) => (
            <Item {...item} key={`${item.id} + ${idx}`} />
          ))}
          {!items.length && <p>No Motos...</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
