type GridItem = {
  imageUrl: string;
  alt?: string;
  href?: string;
  content?: React.ReactNode;
};

type Props = {
  items: GridItem[];
};

export default function FeaturedImageGrid({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
      {items[0] && (
        <article className="md:col-span-2">
          <ImageBlock item={items[0]} ratio="aspect-video md:aspect-21/9" />
        </article>
      )}

      {items[1] && (
        <article>
          <ImageBlock item={items[1]} ratio="aspect-4/3" />
        </article>
      )}

      {items[2] && (
        <article>
          <ImageBlock item={items[2]} ratio="aspect-4/3" />
        </article>
      )}
    </div>
  );
}

function ImageBlock({
  item,
  ratio,
}: {
  item: GridItem;
  ratio: string;
}) {
  const img = (
    <img
      src={item.imageUrl}
      alt={item.alt || ""}
      className="w-full h-full object-cover"
    />
  );

  return (
    <>
      <div className={`w-full overflow-hidden ${ratio}`}>
        {item.href ? <a href={item.href}>{img}</a> : img}
      </div>

      {item.content && (
        <div className="mt-4 md:mt-6">{item.content}</div>
      )}
    </>
  );
}
