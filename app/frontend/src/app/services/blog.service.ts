import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';

/**
 * Blog content lives here as plain data for now — no backend/CMS wired up
 * yet. To publish a new post, add a new object to the top of `posts` below
 * (newest first) with a unique `slug`; the list page and detail page pick
 * it up automatically.
 *
 * When you're ready to manage posts from a database or admin panel instead,
 * swap the body of getAll()/getBySlug() to call the backend (there's already
 * a Spring Boot API in app/backend) instead of reading this array.
 */
@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly posts: BlogPost[] = [
    {
      slug: 'aac-blocks-vs-red-bricks',
      title: 'AAC blocks vs red clay bricks: what actually changes on site',
      excerpt:
        'A practical look at how switching to AAC blocks affects cost, timeline and structural load — not just the brochure numbers.',
      coverImage: 'assets/images/plant/production-block-building.jpg',
      author: 'C4X Team',
      date: '2026-07-10',
      tags: ['AAC Blocks', 'Construction'],
      content: [
        'Builders comparing AAC blocks to red clay bricks usually start with density and price per piece, but the bigger differences show up during construction itself.',
        'Because AAC blocks are roughly a third of the weight of red bricks for the same volume, the load on the foundation and structural frame drops noticeably — which is part of why many RCC-frame projects have shifted to AAC for infill walls.',
        'Wall construction is also faster: larger block sizes mean fewer joints, and joints are where most masonry time (and mortar cost) actually goes.',
        'None of this means AAC is the right choice for every project — thickness, load requirements and finish expectations still need to be checked against the spec sheet for your specific site.',
      ],
    },
    {
      slug: 'thermal-insulation-aac',
      title: 'Why AAC blocks keep buildings cooler without extra insulation',
      excerpt:
        'The cellular structure inside AAC blocks is what gives them their thermal performance — here is how it works.',
      coverImage: 'assets/images/plant/autoclave-curing-line.jpg',
      author: 'C4X Team',
      date: '2026-06-22',
      tags: ['Thermal Performance', 'Sustainability'],
      content: [
        'AAC blocks are manufactured with millions of tiny air pockets formed during the autoclaving process. Trapped air is a poor conductor of heat, which is why the finished block insulates so much better than solid clay or concrete.',
        'In practice, this shows up as lower indoor temperatures during summer and reduced cooling load on HVAC systems — a meaningful saving over the life of a building, not just at construction time.',
        'It is also why AAC walls typically need less added insulation to hit the same energy targets compared to conventional brickwork.',
      ],
    },
    {
      slug: 'choosing-the-right-block-size',
      title: 'Choosing the right AAC block size for your project',
      excerpt:
        'From 100mm partition walls to 230mm load-bearing applications — a quick guide to matching block thickness to the job.',
      coverImage: 'assets/images/plant/plant-silos-exterior.jpg',
      author: 'C4X Team',
      date: '2026-05-30',
      tags: ['Product Guide'],
      content: [
        'C4X AAC blocks are available across eight standard sizes, and the right one depends on what the wall is doing structurally, not just the room it is going into.',
        'Thinner blocks (75-100mm) are typically used for internal partitions where load-bearing capacity is not the priority. Thicker blocks (200-230mm) are more common for external walls, where thermal performance and fire resistance both matter more.',
        'Always cross-check your choice against the compressive strength and fire-resistance figures on the technical spec sheet before finalising quantities for a quote.',
      ],
    },
  ];

  getAll(): BlogPost[] {
    return [...this.posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  getBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((p) => p.slug === slug);
  }
}
