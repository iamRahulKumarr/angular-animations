import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ViewChild,
  ViewChildren,
  Inject,
  PLATFORM_ID,
  QueryList,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('BenefitsImgStart')
  private BenefitsImgStart!: ElementRef<HTMLDivElement>;

  @ViewChild('BenefitsImgEnd')
  private BenefitsImgEnd!: ElementRef<HTMLDivElement>;

  @ViewChildren('BenefitsImg') private BenefitsImg!: QueryList<
    ElementRef<HTMLDivElement>
  >;

  @ViewChildren('featureGrowText') private featureGrowText!: QueryList<
    ElementRef<HTMLSpanElement>
  >;

  private scrollTriggers: ScrollTrigger[] = [];

  private animations: gsap.core.Tween[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // private createScrollTriggerforFeatures(): void {
  //   const animationFeatureCreate = gsap.fromTo(
  //     '.home__features--create',
  //     { y: 100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--create',
  //         toggleActions: 'play none none none',
  //         start: 'top 90%',
  //         end: 'bottom bottom',
  //       },
  //     }
  //   );
  //   const animationFeatureHero2 = gsap.fromTo(
  //     '.home__features--img-hero-2',
  //     { y: 100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--img-hero-2',
  //         toggleActions: 'play none none none',
  //         start: 'top 90%',
  //         end: 'bottom bottom',
  //       },
  //     }
  //   );
  //   const animationFeatureStats = gsap.fromTo(
  //     '.home__features--img-stats',
  //     { scale: 0.5, opacity: 0 },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--img-stats',
  //         start: 'top 90%',
  //         toggleActions: 'play none none none',
  //         end: 'bottom bottom',
  //       },
  //     }
  //   );
  //   const animationFeatureHero1 = gsap.fromTo(
  //     '.home__features--img-hero-1',
  //     { scale: 0.5, opacity: 0 },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--img-hero-1',
  //         start: 'top 90%',
  //         toggleActions: 'play none none none',
  //         end: 'bottom bottom',
  //       },
  //     }
  //   );
  //   const animationFeatureOperations = gsap.fromTo(
  //     '.home__features--img-operations',
  //     { x: -100, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--img-operations',
  //         start: 'top 90%',
  //         toggleActions: 'play none none none',
  //         end: 'bottom bottom',
  //       },
  //     }
  //   );
  //   const animationFeatureGrow = gsap.fromTo(
  //     '.home__features--img-grow',
  //     { x: 100, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--img-grow',
  //         start: 'top 90%',
  //         toggleActions: 'play none none none',
  //         end: 'bottom bottom',
  //       },
  //     }
  //   );
  //   const animationFeatureSupport = gsap.fromTo(
  //     '.home__features--img-support',
  //     { x: 100, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--img-support',
  //         start: 'top 90%',
  //         end: 'bottom bottom',
  //         toggleActions: 'play none none none',
  //       },
  //     }
  //   );
  //   const animationFeatureLive = gsap.fromTo(
  //     '.home__features--img-live',
  //     {
  //       x: -100,
  //       opacity: 1,
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: '.home__features--img-live',
  //         start: 'top 90%',
  //         toggleActions: 'play none none none',
  //         end: 'bottom bottom',
  //       },
  //     }
  //   );
  //   this.animations.push(
  //     animationFeatureCreate,
  //     animationFeatureHero2,
  //     animationFeatureStats,
  //     animationFeatureHero1,
  //     animationFeatureOperations,
  //     animationFeatureGrow,
  //     animationFeatureSupport,
  //     animationFeatureLive
  //   );
  // }
  private createScrollTriggerForFeatureText(): void {
    this.featureGrowText.toArray().forEach((text) => {
      const parentContainer = text.nativeElement.closest('h3');
      const animationFeatureText = gsap.fromTo(
        text.nativeElement,
        {
          opacity: 0,
          translateY: 50,
        },
        {
          opacity: 1,
          translateY: 0,
          scrollTrigger: {
            trigger: parentContainer,
            start: 'top 70%',
            end: 'bottom bottom',
          },
        }
      );
      this.animations.push(animationFeatureText);
    });
  }
  private createScrollTriggerForBenefitStart(): void {
    const parentContainer =
      this.BenefitsImgStart.nativeElement.closest('section');
    const trigger = ScrollTrigger.create({
      trigger: parentContainer,
      start: 'top 20%',
      end: 'bottom 20%',
      invalidateOnRefresh: true,
      pin: this.BenefitsImgStart.nativeElement,
      onLeave: () => {
        gsap.to(this.BenefitsImgStart.nativeElement.querySelector('img'), {
          opacity: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(this.BenefitsImgStart.nativeElement.querySelector('img'), {
          opacity: 1,
          filter: 'blur(0px)',
        });
      },
    });
    this.scrollTriggers.push(trigger);
  }
  private createScrollTriggerForBenefitsEnd(): void {
    gsap.set(this.BenefitsImgEnd.nativeElement.querySelector('img'), {
      opacity: 0,
      filter: 'blur(10px)',
    });
    const parentContainer =
      this.BenefitsImgEnd.nativeElement.closest('section');
    const trigger = ScrollTrigger.create({
      trigger: parentContainer,
      start: 'top 20%',
      end: 'bottom 90%',
      invalidateOnRefresh: true,
      pin: this.BenefitsImgEnd.nativeElement,
      onEnter: () => {
        gsap.fromTo(
          this.BenefitsImgEnd.nativeElement.querySelector('img'),
          {
            opacity: 0,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
          }
        );
      },
      onLeaveBack: () => {
        gsap.fromTo(
          this.BenefitsImgEnd.nativeElement.querySelector('img'),
          { opacity: 1, filter: 'blur(0px)' },
          {
            opacity: 0,
            filter: 'blur(10px)',
          }
        );
      },
    });
    this.scrollTriggers.push(trigger);
  }
  private createScrollTriggerForBenefits(): void {
    this.BenefitsImg.toArray().forEach((img) => {
      gsap.set(img.nativeElement.querySelector('img'), {
        opacity: 0,
        filter: 'blur(10px)',
      });
      const parentContainer = img.nativeElement.closest('section');
      const trigger = ScrollTrigger.create({
        trigger: parentContainer,
        start: 'top 20%',
        end: 'bottom 20%',
        invalidateOnRefresh: true,
        pin: img.nativeElement,

        onEnter: () => {
          gsap.fromTo(
            img.nativeElement.querySelector('img'),
            {
              opacity: 0,
              filter: 'blur(10px)',
            },
            {
              opacity: 1,
              filter: 'blur(0px)',
            }
          );
        },
        onLeave: () => {
          gsap.fromTo(
            img.nativeElement.querySelector('img'),
            {
              opacity: 1,
              filter: 'blur(0px)',
            },
            {
              opacity: 0,
              filter: 'blur(10px)',
            }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(
            img.nativeElement.querySelector('img'),
            {
              opacity: 1,
              filter: 'blur(0px)',
            },
            {
              opacity: 0,
              filter: 'blur(10px)',
            }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            img.nativeElement.querySelector('img'),
            {
              opacity: 0,
              filter: 'blur(10px)',
            },
            {
              opacity: 1,
              filter: 'blur(0px)',
            }
          );
        },
      });
      this.scrollTriggers.push(trigger);
    });
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.matchMedia().add('(min-width: 1000px)', () => {
        // this.createScrollTriggerforFeatures();
        this.createScrollTriggerForFeatureText();
        this.createScrollTriggerForBenefitStart();
        this.createScrollTriggerForBenefits();
        this.createScrollTriggerForBenefitsEnd();
      });
    }
  }
  ngOnDestroy(): void {
    this.scrollTriggers.forEach((trigger) => trigger.kill());
    this.animations.forEach((animation) => animation.scrollTrigger?.kill());
    this.scrollTriggers = [];
    this.animations = [];
  }
}
